import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';
import * as dtoDefinitions from './dto-definitions.json';
import { ApiDefinition, staticApiDefinitions } from './ApiDefinitions';

export { ApiDefinition };

export interface DtoProperty {
	type: string;
	description?: string;
	required?: boolean;
	format?: string;
	enum?: string[];
	items?: {
		type: string;
		properties?: Record<string, DtoProperty>;
	};
	properties?: Record<string, DtoProperty>;
}

export interface DtoDefinition {
	type: string;
	properties: Record<string, DtoProperty>;
}

export class ApiHelper {
  static getApiDefinitions(): Record<string, Record<string, ApiDefinition>> {
    return staticApiDefinitions;
  }

  static getApiDefinition(group: string, service: string): ApiDefinition | null {
    return staticApiDefinitions[group]?.[service] || null;
  }

  static getDtoDefinitions(): Record<string, DtoDefinition> {
    return dtoDefinitions as Record<string, DtoDefinition>;
  }

  static generateDtoExampleFromInline(definition: any): Record<string, any> {
    if (!definition || typeof definition !== 'object') {
      return {};
    }

    const example: Record<string, any> = {};
    
    if (definition.properties) {
      Object.keys(definition.properties).forEach(key => {
        const prop = definition.properties[key];
        example[key] = this.getExampleValue(prop);
      });
    }

    return example;
  }

  static generateDtoExample(schemaName: string): Record<string, any> {
    const dtoDefinitions = this.getDtoDefinitions();
    const definition = dtoDefinitions[schemaName];
    
    if (!definition) {
      return {};
    }

    const example: Record<string, any> = {};
    
    Object.keys(definition.properties).forEach(key => {
      const property = definition.properties[key];
      example[key] = this.getExampleValue(property);
    });

    return example;
  }

  private static getExampleValue(property: DtoProperty): any {
    switch (property.type) {
      case 'string':
        if (property.enum && property.enum.length > 0) {
          return property.enum[0];
        }
        if (property.format === 'date-time') {
          return new Date().toISOString();
        }
        return `example_${property.description?.toLowerCase().replace(/\s+/g, '_') || 'string'}`;
      case 'integer':
      case 'number':
        return 0;
      case 'boolean':
        return false;
      case 'array':
        if (property.items) {
          return [this.getExampleValue(property.items as DtoProperty)];
        }
        return [];
      case 'object':
        if (property.properties) {
          const obj: Record<string, any> = {};
          Object.keys(property.properties).forEach(key => {
            obj[key] = this.getExampleValue(property.properties![key]);
          });
          return obj;
        }
        return {};
      default:
        return null;
    }
  }

  static getResourceOptions(): INodeProperties[] {
    const apiDefinitions = this.getApiDefinitions();
    const resources = Object.keys(apiDefinitions).map(key => ({
      name: key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' '),
      value: key,
    }));

    return [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: resources,
        default: resources[0]?.value || '',
        description: 'The resource to operate on',
      },
    ];
  }

  static getOperationOptions(resource: string): INodeProperties[] {
    const apiDefinitions = this.getApiDefinitions();
    const resourceDef = apiDefinitions[resource];
    
    if (!resourceDef) {
      return [];
    }

    const operations = Object.keys(resourceDef).map(key => ({
      name: resourceDef[key].description || key,
      value: key,
    }));

    return [
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: [resource],
          },
        },
        options: operations,
        default: operations[0]?.value || '',
        description: 'The operation to perform',
      },
    ];
  }

  static getRequestBodyFields(resource: string, operation: string): INodeProperties[] {
    const apiDef = this.getApiDefinition(resource, operation);
    if (!apiDef?.requestBody) {
      return [];
    }

    const fields: INodeProperties[] = [];
    let dtoExample: Record<string, any>;

    // Handle inline definitions
    if (apiDef.definition) {
      dtoExample = this.generateDtoExampleFromInline(apiDef.definition);
    } else {
      dtoExample = this.generateDtoExample(apiDef.requestBody.schema);
    }

    if (Object.keys(dtoExample).length > 0) {
      fields.push({
        displayName: 'Request Body',
        name: 'requestBody',
        type: 'json',
        displayOptions: {
          show: {
            resource: [resource],
            operation: [operation],
          },
        },
        default: JSON.stringify(dtoExample, null, 2),
        description: `Request body for ${apiDef.description}`,
      });
    }

    return fields;
  }

  static getParameterFields(resource: string, operation: string): INodeProperties[] {
    const apiDef = this.getApiDefinition(resource, operation);
    if (!apiDef?.parameters || apiDef.parameters.length === 0) {
      return [];
    }

    const fields: INodeProperties[] = [];
    
    // Separate parameters by type
    const queryParams = apiDef.parameters.filter(p => p.in === 'query');
    const pathParams = apiDef.parameters.filter(p => p.in === 'path');

    // Add query parameters
    if (queryParams.length > 0) {
      const queryProperties: INodeProperties[] = queryParams.map(param => ({
        displayName: param.description || param.name,
        name: param.name,
        type: this.getNodePropertyType(param.type),
        default: param.default || this.getDefaultValue(param.type),
        description: param.description || `${param.name} parameter`,
        required: param.required || false,
      }));

      fields.push({
        displayName: 'Query Parameters',
        name: 'queryParameters',
        type: 'collection',
        displayOptions: {
          show: {
            resource: [resource],
            operation: [operation],
          },
        },
        default: {},
        placeholder: 'Add Parameter',
        options: queryProperties,
      });
    }

    // Add path parameters
    if (pathParams.length > 0) {
      const pathProperties: INodeProperties[] = pathParams.map(param => ({
        displayName: param.description || param.name,
        name: param.name,
        type: this.getNodePropertyType(param.type),
        default: this.getDefaultValue(param.type),
        description: param.description || `${param.name} path parameter`,
        required: false, // We handle validation at runtime
      }));

      fields.push({
        displayName: 'Path Parameters',
        name: 'pathParameters',
        type: 'collection',
        displayOptions: {
          show: {
            resource: [resource],
            operation: [operation],
          },
        },
        default: {},
        placeholder: 'Add Parameter',
        options: pathProperties,
      });
    }

    return fields;
  }

  private static getNodePropertyType(paramType: string): NodePropertyTypes {
    switch (paramType) {
      case 'integer':
      case 'number':
        return 'number';
      case 'boolean':
        return 'boolean';
      case 'object':
        return 'json';
      default:
        return 'string';
    }
  }

  private static getDefaultValue(paramType: string): any {
    switch (paramType) {
      case 'integer':
      case 'number':
        return 0;
      case 'boolean':
        return false;
      case 'object':
        return '{}';
      default:
        return '';
    }
  }

  static getAllFields(): INodeProperties[] {
    const apiDefinitions = this.getApiDefinitions();
    const fields: INodeProperties[] = [];

    // Add resource selection
    fields.push(...this.getResourceOptions());

    // Add operation fields for each resource
    Object.keys(apiDefinitions).forEach(resource => {
      fields.push(...this.getOperationOptions(resource));
      
      // Add parameter and request body fields for each operation
      Object.keys(apiDefinitions[resource]).forEach(operation => {
        fields.push(...this.getParameterFields(resource, operation));
        fields.push(...this.getRequestBodyFields(resource, operation));
      });
    });

    return fields;
  }

  // Legacy methods for backward compatibility
  static getResources(): INodeProperties[] {
    return this.getResourceOptions();
  }

  static getOperations(): INodeProperties[] {
    const apiDefinitions = this.getApiDefinitions();
    const fields: INodeProperties[] = [];

    Object.keys(apiDefinitions).forEach(resource => {
      fields.push(...this.getOperationOptions(resource));
    });

    return fields;
  }

  static getFields(): INodeProperties[] {
    const apiDefinitions = this.getApiDefinitions();
    const fields: INodeProperties[] = [];

    Object.keys(apiDefinitions).forEach(resource => {
      Object.keys(apiDefinitions[resource]).forEach(operation => {
        fields.push(...this.getParameterFields(resource, operation));
        fields.push(...this.getRequestBodyFields(resource, operation));
      });
    });

    return fields;
  }
}