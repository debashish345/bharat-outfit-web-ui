export interface Filter {
    id: string;
    filter_name: string;
    size: string[];
    color: string[];
    price: PriceFilter
}

interface PriceFilter {
    min: number;
    max: number;
}
