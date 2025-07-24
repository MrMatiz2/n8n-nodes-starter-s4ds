import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';
import * as dtoDefinitions from './dto-definitions.json';
import generateToken from './actions/authentication/generateToken.json';
import getProductCount from './actions/products/getProductCount.json';
import updateProduct from './actions/products/updateProduct.json';
import createProduct from './actions/products/createProduct.json';
import deleteProduct from './actions/products/deleteProduct.json';
import getProductDetailed from './actions/products/getProductDetailed.json';
import getAllProducts from './actions/products/getAllProducts.json';
import createProductAndProductCatalog from './actions/products/createProductAndProductCatalog.json';
import getProductByReference from './actions/products/getProductByReference.json';
import getRelatedProduct from './actions/products/getRelatedProduct.json';
import getFullProduct from './actions/products/getFullProduct.json';
import getCustomerByDocument from './actions/customers/getCustomerByDocument.json';
import createCustomer from './actions/customers/createCustomer.json';
import updateCustomer from './actions/customers/updateCustomer.json';
import cloneUsername from './actions/customers/cloneUsername.json';
import customerInfo from './actions/customers/customerInfo.json';
import getAdvancedSearch from './actions/customers/getAdvancedSearch.json';
import getConsultantInformation from './actions/customers/getConsultantInformation.json';
import getDocumentIdByAutocomplete from './actions/customers/getDocumentIdByAutocomplete.json';
import getOffSyncCustomers from './actions/customers/getOffSyncCustomers.json';
import getOrdersByCustomer from './actions/customers/getOrdersByCustomer.json';
import getUserByToken from './actions/customers/getUserByToken.json';
import inactiveCustomer from './actions/customers/inactiveCustomer.json';
import createCommissionPayment from './actions/commissions/createCommissionPayment.json';
import getCommissions from './actions/commissions/getCommissions.json';
import getIndicators from './actions/commissions/getIndicators.json';
import getAllCatalogs from './actions/catalog/getAllCatalogs.json';
import createCatalog from './actions/catalog/createCatalog.json';
import updateCatalog from './actions/catalog/updateCatalog.json';
import getCatalogById from './actions/catalog/getCatalogById.json';
import deleteCatalog from './actions/catalog/deleteCatalog.json';
import getMongoDBCatalogProducts from './actions/catalog/getMongoDBCatalogProducts.json';
import indexProducts from './actions/catalog/indexProducts.json';
import getProductCategories from './actions/catalog/getProductCategories.json';
import getCatalogFilters from './actions/catalog/getCatalogFilters.json';
import getCountAllCatalog from './actions/catalog/getCountAllCatalog.json';
import getNotesByUser from './actions/notes/getNotesByUser.json';
import createNote from './actions/notes/createNote.json';
import getAllLeads from './actions/leads/getAllLeads.json';
import createLead from './actions/leads/createLead.json';
import updateLead from './actions/leads/updateLead.json';
import convertLead from './actions/leads/convertLead.json';
import deleteLead from './actions/leads/deleteLead.json';
import getDeals from './actions/deals/getDeals.json';
import createDeal from './actions/deals/createDeal.json';
import updateDeal from './actions/deals/updateDeal.json';
import getDealAmount from './actions/deals/getDealAmount.json';
import getAllRoles from './actions/roles/getAllRoles.json';
import getRoleAccessByUser from './actions/roles/getRoleAccessByUser.json';
import search360 from './actions/pages/search360.json';
import getPages from './actions/pages/getPages.json';
import getShortcutsList from './actions/pages/getShortcutsList.json';
import getLanguages from './actions/languages/getLanguages.json';
import createLanguage from './actions/languages/createLanguage.json';
import deleteLanguage from './actions/languages/deleteLanguage.json';
import updateLanguage from './actions/languages/updateLanguage.json';
import getLanguageTranslation from './actions/languages/getLanguageTranslation.json';
import createLanguageTranslation from './actions/languages/createLanguageTranslation.json';
import updateLanguageTranslation from './actions/languages/updateLanguageTranslation.json';
import getOrders from './actions/orders/getOrders.json';
import createOrder from './actions/orders/createOrder.json';
import cancelOrder from './actions/orders/cancelOrder.json';
import updateInvoice from './actions/orders/updateInvoice.json';
import getOrderDocument from './actions/orders/getOrderDocument.json';
import updateOrderDocument from './actions/orders/updateOrderDocument.json';
import setOrderDocument from './actions/orders/setOrderDocument.json';
import deleteOrderDocument from './actions/orders/deleteOrderDocument.json';
import getCommentOrder from './actions/orders/getCommentOrder.json';
import updateOrderComment from './actions/orders/updateOrderComment.json';
import addCommentOrder from './actions/orders/addCommentOrder.json';
import deleteOrderComment from './actions/orders/deleteOrderComment.json';
import processOrder from './actions/orders/processOrder.json';
import finishOrder from './actions/orders/finishOrder.json';
import releaseInventory from './actions/orders/releaseInventory.json';
import updateOrderItems from './actions/orders/updateOrderItems.json';
import updateOrderDetails from './actions/orders/updateOrderDetails.json';
import getSpecificOrder from './actions/orders/getSpecificOrder.json';
import getOrderWrapper from './actions/orders/getOrderWrapper.json';
import getPaymentUrl from './actions/orders/getPaymentUrl.json';
import getCustomersWithoutOrder from './actions/orders/getCustomersWithoutOrder.json';
import getPicklist from './actions/picklists/getPicklist.json';
import updatePicklist from './actions/picklists/updatePicklist.json';
import createPicklist from './actions/picklists/createPicklist.json';
import deletePicklist from './actions/picklists/deletePicklist.json';
import getCampaignByFilters from './actions/campaign/getCampaignByFilters.json';
import updateCampaignById from './actions/campaign/updateCampaignById.json';
import createCampaign from './actions/campaign/createCampaign.json';
import getCycles from './actions/campaign/getCycles.json';
import deleteCampaignById from './actions/campaign/deleteCampaignById.json';
import uploadAttachmentsToHistory from './actions/tickets/uploadAttachmentsToHistory.json';
import createTicket from './actions/tickets/createTicket.json';
import getTicketsByFilters from './actions/tickets/getTicketsByFilters.json';
import addTicketParticipant from './actions/tickets/addTicketParticipant.json';
import removeTicketParticipant from './actions/tickets/removeTicketParticipant.json';
import updateTicketParticipant from './actions/tickets/updateTicketParticipant.json';
import updateTicketHistory from './actions/tickets/updateTicketHistory.json';
import changeTicketStatus from './actions/tickets/changeTicketStatus.json';
import searchTickets from './actions/tickets/searchTickets.json';
import getTicketTypes from './actions/tickets/getTicketTypes.json';
import getTicketStatuses from './actions/tickets/getTicketStatuses.json';
import getTicketById from './actions/tickets/getTicketById.json';
import updateTicket from './actions/tickets/updateTicket.json';
import deleteTicket from './actions/tickets/deleteTicket.json';
import getTasks from './actions/tasks/getTasks.json';
import createPersonTask from './actions/tasks/createPersonTask.json';
import updatePersonTask from './actions/tasks/updatePersonTask.json';
import deletePersonTask from './actions/tasks/deletePersonTask.json';
import getTaskTypes from './actions/tasks/getTaskTypes.json';
import getTaskStatuses from './actions/tasks/getTaskStatuses.json';
import getTimeLine from './actions/timeline/getTimeLine.json';
import patchComment from './actions/timeline/patchComment.json';
import deleteComment from './actions/timeline/deleteComment.json';

export interface ApiDefinition {
	method: string;
	endpoint: string;
	description: string;
	parameters: ApiParameter[];
	requiresAuth: boolean;
	requestBody?: {
		schema: string;
		required: boolean;
	};
	response: {
		type: string;
		properties: Record<string, any>;
	};
}

export interface ApiParameter {
	name: string;
	type: string;
	required: boolean;
	description: string;
	in: 'query' | 'body' | 'path';
}

export interface DtoProperty {
	type: string;
	description: string;
	required: boolean;
	schema?: string;
	items?: {
		type: string;
		schema?: string;
	};
}

export interface DtoDefinition {
	type: string;
	properties: Record<string, DtoProperty>;
}

const staticApiDefinitions: Record<string, Record<string, ApiDefinition>> = {
  authentication: {
    generateToken: generateToken as ApiDefinition,
  },
  products: {
    getProductCount: getProductCount as ApiDefinition,
    updateProduct: updateProduct as ApiDefinition,
    createProduct: createProduct as ApiDefinition,
    deleteProduct: deleteProduct as ApiDefinition,
    getProductDetailed: getProductDetailed as ApiDefinition,
    getAllProducts: getAllProducts as ApiDefinition,
    createProductAndProductCatalog: createProductAndProductCatalog as ApiDefinition,
    getProductByReference: getProductByReference as ApiDefinition,
    getRelatedProduct: getRelatedProduct as ApiDefinition,
    getFullProduct: getFullProduct as ApiDefinition,
  },
  customers: {
    getCustomerByDocument: getCustomerByDocument as ApiDefinition,
    createCustomer: createCustomer as ApiDefinition,
    updateCustomer: updateCustomer as ApiDefinition,
    cloneUsername: cloneUsername as ApiDefinition,
    customerInfo: customerInfo as ApiDefinition,
    getAdvancedSearch: getAdvancedSearch as ApiDefinition,
    getConsultantInformation: getConsultantInformation as ApiDefinition,
    getDocumentIdByAutocomplete: getDocumentIdByAutocomplete as ApiDefinition,
    getOffSyncCustomers: getOffSyncCustomers as ApiDefinition,
    getOrdersByCustomer: getOrdersByCustomer as ApiDefinition,
    getUserByToken: getUserByToken as ApiDefinition,
    inactiveCustomer: inactiveCustomer as ApiDefinition,
  },
  commissions: {
    createCommissionPayment: createCommissionPayment as ApiDefinition,
    getCommissions: getCommissions as ApiDefinition,
    getIndicators: getIndicators as ApiDefinition
  },
  catalog: {
    getAllCatalogs: getAllCatalogs as ApiDefinition,
    createCatalog: createCatalog as ApiDefinition,
    updateCatalog: updateCatalog as ApiDefinition,
    getCatalogById: getCatalogById as ApiDefinition,
    deleteCatalog: deleteCatalog as ApiDefinition,
    getMongoDBCatalogProducts: getMongoDBCatalogProducts as ApiDefinition,
    indexProducts: indexProducts as ApiDefinition,
    getProductCategories: getProductCategories as ApiDefinition,
    getCatalogFilters: getCatalogFilters as ApiDefinition,
    getCountAllCatalog: getCountAllCatalog as ApiDefinition
  },
  notes: {
    getNotesByUser: getNotesByUser as ApiDefinition,
    createNote: createNote as ApiDefinition
  },
  leads: {
    getAllLeads: getAllLeads as ApiDefinition,
    createLead: createLead as ApiDefinition,
    updateLead: updateLead as ApiDefinition,
    convertLead: convertLead as ApiDefinition,
    deleteLead: deleteLead as ApiDefinition
  },
  deals: {
    getDeals: getDeals as ApiDefinition,
    createDeal: createDeal as ApiDefinition,
    updateDeal: updateDeal as ApiDefinition,
    getDealAmount: getDealAmount as ApiDefinition
  },
  roles: {
    getAllRoles: getAllRoles as ApiDefinition,
    getRoleAccessByUser: getRoleAccessByUser as ApiDefinition
  },
  pages: {
    search360: search360 as ApiDefinition,
    getPages: getPages as ApiDefinition,
    getShortcutsList: getShortcutsList as ApiDefinition
  },
  languages: {
    getLanguages: getLanguages as ApiDefinition,
    createLanguage: createLanguage as ApiDefinition,
    deleteLanguage: deleteLanguage as ApiDefinition,
    updateLanguage: updateLanguage as ApiDefinition,
    getLanguageTranslation: getLanguageTranslation as ApiDefinition,
    createLanguageTranslation: createLanguageTranslation as ApiDefinition,
    updateLanguageTranslation: updateLanguageTranslation as ApiDefinition
  },
  orders: {
    getOrders: getOrders as ApiDefinition,
    createOrder: createOrder as ApiDefinition,
    cancelOrder: cancelOrder as ApiDefinition,
    updateInvoice: updateInvoice as ApiDefinition,
    getOrderDocument: getOrderDocument as ApiDefinition,
    updateOrderDocument: updateOrderDocument as ApiDefinition,
    setOrderDocument: setOrderDocument as ApiDefinition,
    deleteOrderDocument: deleteOrderDocument as ApiDefinition,
    getCommentOrder: getCommentOrder as ApiDefinition,
    updateOrderComment: updateOrderComment as ApiDefinition,
    addCommentOrder: addCommentOrder as ApiDefinition,
    deleteOrderComment: deleteOrderComment as ApiDefinition,
    processOrder: processOrder as ApiDefinition,
    finishOrder: finishOrder as ApiDefinition,
    releaseInventory: releaseInventory as ApiDefinition,
    updateOrderItems: updateOrderItems as ApiDefinition,
    updateOrderDetails: updateOrderDetails as ApiDefinition,
    getSpecificOrder: getSpecificOrder as ApiDefinition,
    getOrderWrapper: getOrderWrapper as ApiDefinition,
    getPaymentUrl: getPaymentUrl as ApiDefinition,
    getCustomersWithoutOrder: getCustomersWithoutOrder as ApiDefinition,
  },
  picklists: {
    getPicklist: getPicklist as ApiDefinition,
    updatePicklist: updatePicklist as ApiDefinition,
    createPicklist: createPicklist as ApiDefinition,
    deletePicklist: deletePicklist as ApiDefinition,
  },
  campaign: {
    getCampaignByFilters: getCampaignByFilters as ApiDefinition,
    updateCampaignById: updateCampaignById as ApiDefinition,
    createCampaign: createCampaign as ApiDefinition,
    getCycles: getCycles as ApiDefinition,
    deleteCampaignById: deleteCampaignById as ApiDefinition,
  },
  tickets: {
    uploadAttachmentsToHistory: uploadAttachmentsToHistory as ApiDefinition,
    createTicket: createTicket as ApiDefinition,
    getTicketsByFilters: getTicketsByFilters as ApiDefinition,
    addTicketParticipant: addTicketParticipant as ApiDefinition,
    removeTicketParticipant: removeTicketParticipant as ApiDefinition,
    updateTicketParticipant: updateTicketParticipant as ApiDefinition,
    updateTicketHistory: updateTicketHistory as ApiDefinition,
    changeTicketStatus: changeTicketStatus as ApiDefinition,
    searchTickets: searchTickets as ApiDefinition,
    getTicketTypes: getTicketTypes as ApiDefinition,
    getTicketStatuses: getTicketStatuses as ApiDefinition,
    getTicketById: getTicketById as ApiDefinition,
    updateTicket: updateTicket as ApiDefinition,
    deleteTicket: deleteTicket as ApiDefinition,
  },
  tasks: {
    getTasks: getTasks as ApiDefinition,
    createPersonTask: createPersonTask as ApiDefinition,
    updatePersonTask: updatePersonTask as ApiDefinition,
    deletePersonTask: deletePersonTask as ApiDefinition,
    getTaskTypes: getTaskTypes as ApiDefinition,
    getTaskStatuses: getTaskStatuses as ApiDefinition,
  },
  timeline: {
    getTimeLine: getTimeLine as ApiDefinition,
    patchComment: patchComment as ApiDefinition,
    deleteComment: deleteComment as ApiDefinition,
  },
};

export class ApiHelper {
  static getApiDefinitions(): Record<string, Record<string, ApiDefinition>> {
    return staticApiDefinitions;
  }
  static getApiDefinition(group: string, service: string): ApiDefinition | null {
    return staticApiDefinitions[group]?.[service] || null;
  }

	static getResources(): INodeProperties[] {
		const definitions = this.getApiDefinitions();
		const resources = Object.keys(definitions).map(resource => ({
			name: this.capitalizeFirst(resource),
			value: resource,
			description: `${resource} operations`,
		}));

		return [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: resources,
				default: resources[0]?.value || 'authentication',
			},
		];
	}

	static getOperations(): INodeProperties[] {
		const definitions = this.getApiDefinitions();
		const operations: INodeProperties[] = [];

		Object.keys(definitions).forEach(resource => {
			const resourceOperations = Object.keys(definitions[resource]).map(operation => ({
				name: this.formatOperationName(operation),
				value: operation,
				description: definitions[resource][operation].description,
				action: this.formatOperationName(operation),
			}));

			operations.push({
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [resource],
					},
				},
				options: resourceOperations,
				default: resourceOperations[0]?.value || '',
			});
		});

		return operations;
	}

	static getFields(): INodeProperties[] {
		const definitions = this.getApiDefinitions();
		const fields: INodeProperties[] = [];


		Object.keys(definitions).forEach(resource => {
			Object.keys(definitions[resource]).forEach(operation => {
				const apiDef = definitions[resource][operation];

				if (apiDef.parameters && apiDef.parameters.length > 0) {
					fields.push(...this.getOperationFields(resource, operation, apiDef.parameters));
				}

				if (apiDef.requestBody && apiDef.requestBody.schema) {
					fields.push(...this.getRequestBodyFields(resource, operation, apiDef.requestBody.schema));
				}
			});
		});

		return fields;
	}

	private static getOperationFields(resource: string, operation: string, parameters: ApiParameter[]): INodeProperties[] {
		const fields: INodeProperties[] = [];

		const queryParams = parameters.filter(p => p.in === 'query');
		const bodyParams = parameters.filter(p => p.in === 'body');

		if (queryParams.length > 0) {
			fields.push({
				displayName: 'Query Parameters',
				name: 'queryParameters',
				type: 'collection',
				placeholder: 'Add Query Parameter',
				default: {},
				displayOptions: {
					show: {
						resource: [resource],
						operation: [operation],
					},
				},
				options: queryParams.map(param => ({
					displayName: this.capitalizeFirst(param.name),
					name: param.name,
					type: this.mapParameterType(param.type),
					default: '',
					required: param.required,
					description: param.description,
				})),
			});
		}

		if (bodyParams.length > 0) {
			fields.push({
				displayName: 'Body Parameters',
				name: 'bodyParameters',
				type: 'collection',
				placeholder: 'Add Body Parameter',
				default: {},
				displayOptions: {
					show: {
						resource: [resource],
						operation: [operation],
					},
				},
				options: bodyParams.map(param => ({
					displayName: this.capitalizeFirst(param.name),
					name: param.name,
					type: this.mapParameterType(param.type),
					default: '',
					required: param.required,
					description: param.description,
				})),
			});
		}

		return fields;
	}

	private static getRequestBodyFields(resource: string, operation: string, dtoSchema: string): INodeProperties[] {
		const example = this.generateDtoExample(dtoSchema);
		return [
			{
				displayName: 'Request Body (JSON)',
				name: 'requestBody',
				type: 'json',
				default: JSON.stringify(example, null, 2),
				required: false,
				description: 'Pega aquí el JSON completo según el esquema del DTO.',
				displayOptions: {
					show: {
						resource: [resource],
						operation: [operation],
					},
				},
			},
		];
	}

	private static generateDtoExample(dtoName: string): any {
		const dtoDef = this.getDtoDefinition(dtoName);
		if (!dtoDef) return {};
		const result: any = {};
		Object.keys(dtoDef.properties).forEach(propName => {
			const prop = dtoDef.properties[propName];
			if (prop.type === 'object' && prop.schema) {
				result[propName] = this.generateDtoExample(prop.schema);
			} else if (prop.type === 'object') {
				result[propName] = {};
			} else if (prop.type === 'array' && prop.items?.schema) {
				result[propName] = [this.generateDtoExample(prop.items.schema)];
			} else if (prop.type === 'array') {
				result[propName] = [];
			} else if (prop.type === 'boolean') {
				result[propName] = false;
			} else if (prop.type === 'number' || prop.type === 'integer') {
				result[propName] = 0;
			} else {
				result[propName] = '';
			}
		});
		return result;
	}

	private static mapParameterType(apiType: string): NodePropertyTypes {
		switch (apiType.toLowerCase()) {
			case 'string':
				return 'string';
			case 'number':
			case 'integer':
				return 'number';
			case 'boolean':
				return 'boolean';
			case 'array':
				return 'fixedCollection';
			case 'object':
				return 'json';
			default:
				return 'string';
		}
	}

	private static capitalizeFirst(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	private static formatOperationName(operation: string): string {
		return operation
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, str => str.toUpperCase())
			.trim();
	}

	static getDtoDefinitions(): Record<string, DtoDefinition> {
		return dtoDefinitions as any;
	}

	static getDtoDefinition(dtoName: string): DtoDefinition | null {
		const definitions = this.getDtoDefinitions();
		return definitions[dtoName] || null;
	}

	static generateDtoFields(dtoName: string, prefix: string = ''): INodeProperties[] {
		const dtoDef = this.getDtoDefinition(dtoName);
		if (!dtoDef) return [];

		const fields: INodeProperties[] = [];
		
		Object.keys(dtoDef.properties).forEach(propName => {
			const prop = dtoDef.properties[propName];
			const fieldName = prefix ? `${prefix}.${propName}` : propName;
			const displayName = this.capitalizeFirst(propName);

			if (prop.type === 'object' && prop.schema) {
				fields.push({
					displayName: `${displayName} (${prop.schema})`,
					name: fieldName,
					type: 'collection',
					placeholder: `Add ${displayName}`,
					default: {},
					required: prop.required,
					description: prop.description,
					options: this.generateDtoFields(prop.schema, fieldName),
				});
			} else if (prop.type === 'array' && prop.items?.schema) {
				fields.push({
					displayName: `${displayName} (Array of ${prop.items.schema})`,
					name: fieldName,
					type: 'fixedCollection',
					typeOptions: {
						multipleValues: true,
					},
					placeholder: `Add ${displayName} Item`,
					default: {},
					required: prop.required,
					description: prop.description,
					options: [
						{
							displayName: prop.items.schema,
							name: 'item',
							values: this.generateDtoFields(prop.items.schema, `${fieldName}.item`),
						},
					],
				});
			} else {
				fields.push({
					displayName,
					name: fieldName,
					type: this.mapParameterType(prop.type),
					default: '',
					required: prop.required,
					description: prop.description,
				});
			}
		});

		return fields;
	}

	static buildDtoObject(data: Record<string, any>, dtoSchema: string): any {
		const dtoDef = this.getDtoDefinition(dtoSchema);
		if (!dtoDef) return data;

		const result: any = {};

		Object.keys(dtoDef.properties).forEach(propName => {
			const prop = dtoDef.properties[propName];
			const value = data[propName];

			if (value !== undefined && value !== '') {
				if (prop.type === 'object' && prop.schema) {
					result[propName] = this.buildDtoObject(value, prop.schema);
				} else if (prop.type === 'array' && prop.items?.schema) {
					if (Array.isArray(value)) {
						result[propName] = value.map(item => this.buildDtoObject(item, prop.items!.schema!));
					} else if (value && typeof value === 'object') {
						result[propName] = Object.values(value).map((item: any) => 
							this.buildDtoObject(item, prop.items!.schema!)
						);
					}
				} else {
					result[propName] = value;
				}
			}
		});

		return result;
	}
} 