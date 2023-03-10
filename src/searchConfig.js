import "regenerator-runtime/runtime";
// import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";


// const connector = new AppSearchAPIConnector({
//   searchKey: "search-nyxkw1fuqex9qjhfvatbqfmw",
//   engineName: "hearthstone-cards",
//   endpointBase: "https://search-ui-sandbox.ent.us-central1.gcp.cloud.es.io"
// });
//
// const config = {
//   debug: true,
//   apiConnector: connector,
//   searchQuery: {
//     disjunctiveFacets: ["cost", "card_class", "set", "type", "race", "rarity"],
//     facets: {
//       race: {
//         type: "value"
//       },
//       rarity: {
//         type: "value"
//       },
//       type: {
//         type: "value"
//       },
//       set: {
//         type: "value",
//         size: 30
//       },
//       card_class: {
//         type: "value"
//       },
//       cost: {
//         type: "range",
//         ranges: [
//           { from: 0, to: 1, name: "0" },
//           { from: 1, to: 2, name: "1" },
//           { from: 2, to: 3, name: "2" },
//           { from: 3, to: 4, name: "3" },
//           { from: 4, to: 5, name: "4" },
//           { from: 5, to: 6, name: "5" },
//           { from: 6, to: 7, name: "6" },
//           { from: 7, to: 8, name: "7" },
//           { from: 8, name: "8+" }
//         ]
//       }
//     }
//   }
// };

const connector = new ElasticsearchAPIConnector({
    host: "http://localhost:9200",
    index: "paper_with_code"
});

const config = {
    searchQuery: {
        search_fields:{
            title:{},
            dataset_list:{},
            method_list:{},
            task_list:{}
        },
        result_fields:{
            title:{},
            dataset_list:{},
            method_list:{},
            task_list:{}
        },
        facets: {
            "title":{type:"text"}
        }
    },
    autocompleteQuery: {
        results: {
            resultsPerPage: 5,
            search_fields: {
                "title.suggest": {
                    weight: 3
                }
            },
            result_fields: {
                title: {
                    snippet: {
                        size: 100,
                        fallback: true
                    }
                },
                url: {
                    raw: {}
                }
            }
        }},
    apiConnector: connector,
    alwaysSearchOnInitialLoad: true
};



export default config;
