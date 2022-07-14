import { ItemPreview } from './item-preview.jsx'

export function ItemList() { 
    const arr = [1, 2, 3, 4]
    return <div className="item-list">
        {arr.map(item => <ItemPreview key={item} />)}
    </div>
}