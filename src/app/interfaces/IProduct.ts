import {IComment} from "./IComment";

export interface IProduct
{
	_id: string;
	title: string;
	images: string[];
	remained: number;
	realPrice: number;
	salePrice: number;
	rate?: number;
	comments?: IComment[]
}
