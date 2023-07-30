export type Restaurant = {
	name: string;
	category: string;
	address: Address;
	menu: Menu[];
};

export type Address = {
	city: string;
	detail: string;
	zipCode: number;
};

export type Menu = {
	name: string;
	price: number;
	category: string;
};

export type removePriceMenu = Omit<Menu, "price">;

export type AddressWithoutZip = Omit<Address, "zipCode">;
export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

export type ApiResponse<Type> = {
	data: Type[];
	totalPage: number;
	page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
