export function adddata(item)
{
    return{
        type:'adddata',
        data:item
    }
}
export function remove(id)
{
    return{
        type:'remove',
        id:id
    }
}