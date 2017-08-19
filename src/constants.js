const constants = {
	GET_PAGES_MENU_QUERY : `
			pages(where: {parent: "0"}){
			        edges{
			            node{
			                id
			                title
			                slug
			            }
			        }
			    }
			`
};

export default constants;