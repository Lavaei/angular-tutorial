import {IComment} from "./IComment";

export interface IProduct
{
	_id: string;
	title: string;
	images: string[];
	remained: number;
	rate?: number;
	comments?: IComment[]
}
