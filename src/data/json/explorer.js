const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.js",
          isFolder: false
        },
        {
          name: "index.html",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "actions",
          isFolder: true,
          items: [
            {
              name: "actions.js",
              isFolder: false
            },
            {
              name: "actions.test.js",
              isFolder: false
            }
          ]
        },
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "ArrayComponent",
              isFolder: true,
              items: [
                {
                  name: "ArrayComponent.js",
                  isFolder: false
                },
                {
                  name: "index.js",
                  isFolder: false
                }
              ]
            },
            {
              name: "DebounceComponent",
              isFolder: true,
              items: [
                {
                  name: "DebounceComponent.js",
                  isFolder: false
                },
                {
                  name: "index.js",
                  isFolder: false
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default explorer;
