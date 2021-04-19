interface customFields {
	name: string;
	placeholder: string;
	displayValue: string;
	type: string;
	options: string;
	required: boolean;
	operation: string | null;
	optionsArray: string[];
}

interface variants {
	stock: number;
	variation: [{ name: string; option: string }];
	allowOutofStockPurchases: boolean;
}

export interface productType {
	userDefinedId: string;
	url: string;
	name: string;
	description: string;
	fileGuid: any;
	price: number;
	image: string;
	archived: boolean;
	inventoryManagementMethod: string;
	stock: number;
	totalStock: number;
	allowOutOfStockPurchases: boolean;
	statistics: { numbreofSales: number; totalSales: number };
	customFields: customFields[] | [];
	variants: variants[];
	metadata: string | null;
	id: string;
	creationDate: string;
	modificationDate: string;
}

/*
"mode": "Test",
            "userDefinedId": "1",
            "url": "/products/1",
            "name": "Gymshark shirt idk",
            "description": "The best gymshark shirt ever!!! {NEWLINE} Compression fit, dry clean only :D",
            "fileGuid": null,
            "price": 29.99,
            "categories": [],
            "image": "/img/gymshark1.jpg",
            "archived": false,
            "inventoryManagementMethod": "Variant",
            "stock": 5,
            "totalStock": 15,
            "allowOutOfStockPurchases": false,
            "statistics": {
                "numberOfSales": 7,
                "totalSales": 209.99
            },
 */
