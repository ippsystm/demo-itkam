
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map (u => {
        if(u[objPropName] === itemId) {//u["id"], можно через точку: u.id
            return { ...u, ...newObjProps}
        }
        return u;
    })
}

