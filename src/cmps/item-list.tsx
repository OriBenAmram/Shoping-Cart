import { ItemPreview } from './item-preview'

type ItemListProps = {
    items: {
        id: string;
        name: string;
        price: number;
        imgUrl: string
    }[]
}

export function ItemList({ items }: ItemListProps) {
    console.log('items:', items);
    
    return <div className="item-list">
        {items.map(item => <ItemPreview item={item} key={item.id} />)}
    </div>
}