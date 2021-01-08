export interface IMenuItem
{
  _id: string;
  title: string;
  href?: string;
  children?: IMenuItem[]
}
