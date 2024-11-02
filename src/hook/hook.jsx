const tree=()=>{
    function nodeval(tree,folderId,item,isFolder){
        if(tree.id===folderId && tree.isFolder){
            tree.items.unshift({
                id: new Date().getTime(),
                name:item,
                isFolder,
                items:[]
            })
            return tree
        }

        let latesnode=[]
        latesnode= tree.items.map((dd)=>{
            return nodeval(dd,folderId,item,isFolder)
        })
       return {...tree,items:latesnode}

    }




    return{nodeval}
}
export default tree