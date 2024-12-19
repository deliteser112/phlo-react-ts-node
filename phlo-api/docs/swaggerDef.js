module.exports = {
    paths: {
      "/api/opportunities": {
        get: {
          summary: "Retrieve a list of funding opportunities",
          description:
            "Retrieve all funding opportunities or filter them using a query parameter.",
          parameters: [
            {
              in: "query",
              name: "query",
              schema: { type: "string" },
              required: false,
              description:
                "Search keyword to filter opportunities by title or description",
            },
          ],
          responses: {
            200: {
              description: "A list of funding opportunities.",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "integer" },
                        title: { type: "string" },
                        description: { type: "string" },
                        location: { type: "string" },
                        deadline: { type: "string" },
                        cheque_size: { type: "string" },
                        type: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Error retrieving data",
            },
          },
        },
      },
    },
  };
  