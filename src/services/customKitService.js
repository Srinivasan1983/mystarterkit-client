export default class customKitService {
  customKitId = [
    {
      id: "st001",
      name: "Study Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/SS_300x.png?v=1554528807"
    },
    {
      id: "st002",
      name: "Bathroom Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/BS_300x.png?v=1554528795"
    },
    {
      id: "st003",
      name: "Room Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/RS_300x.png?v=1554528805"
    },
    {
      id: "st004",
      name: "Cleaning & Laundry Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/LCS_300x.png?v=1554528796"
    },
    {
      id: "st005",
      name: "Kitchen Set",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/imageedit_1_5011035356_300x.png?v=1554528801"
    }
  ];
  customKit = [
    {
      setId: "st001",
      individualItems: [
        {
          id: 1,
          category: "Bathroom Set",
          name: "Some Name1",
          productId: "B001",
          price: 9.0,
          checked: false,
          Quantity: 0
        },
        {
          id: 2,
          category: "Bathroom Set",
          name: "Some Name2",
          productId: "B002",
          price: 9.1,
          checked: false,
          Quantity: 0
        }
      ]
    },
    {
      setId: "st002",
      individualItems: [
        {
          id: 1,
          category: "Room Set",
          name: "Some Name1",
          productId: "R001",
          price: 9.2,
          checked: false,
          Quantity: 0
        },
        {
          id: 2,
          category: "Room Set",
          name: "Some Name2",
          productId: "R002",
          price: 9.3,
          checked: false,
          Quantity: 0
        }
      ]
    },
    {
      setId: "st003",
      individualItems: [
        {
          id: 1,
          category: "Study Set",
          name: "Some Name1",
          productId: "S001",
          price: 9.4,
          checked: false,
          Quantity: 0
        },
        {
          id: 2,
          category: "Study Set",
          name: "Some Name2",
          productId: "S002",
          price: 9.5,
          checked: false,
          Quantity: 0
        }
      ]
    },
    {
      setId: "st004",
      individualItems: [
        {
          id: 1,
          category: "Kitchen Set",
          name: "Some Name1",
          productId: "K001",
          price: 9.6,
          checked: false,
          Quantity: 0
        },
        {
          id: 2,
          category: "Kitchen Set",
          name: "Some Name2",
          productId: "K002",
          price: 9.7,
          checked: false,
          Quantity: 0
        }
      ]
    },
    {
      setId: "st005",
      individualItems: [
        {
          id: 1,
          category: "Cleaning & Laundry Set",
          name: "Some Name1",
          productId: "C001",
          price: 9.8,
          checked: false,
          Quantity: 0
        },
        {
          id: 2,
          category: "Cleaning & Laundry Set",
          name: "Some Name2",
          productId: "L001",
          price: 9.9,
          checked: false,
          Quantity: 0
        }
      ]
    }
  ];
  starterkits = [
    {
      id: 1,
      name: "100% Ready Kit",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/O1_540x.png?v=1554528793",
      price: 189.9,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description:
        "Take an organized step when moving away from home, with a 100% Ready Kit, and focus on socializing and discovering the new city you live in. This Kit gives you free access to the Starter Kit Benefits. This kit includes Room set, Kitchen set, Bathroom set, Laundry set, Cleaning set and, Study set." +
        "The entire kit will be delivered in one box with necessary padding preventing breakages during transportation and handling...",
      customization: [
        {
          matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
          towelcolor: ["white", "cream", "skyblue"],
          beddingcolor: ["white", "lightblue", "lightgrey"]
        },
        {
          name: [
            {
              matresssize: "Matters Size",
              towelcolor: "Towel Color",
              beddingcolor: "Bedding Color"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "HTH Tailored 100% Ready Kit",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/O4_540x.png?v=1554528799",
      price: 181.9,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description:
        "Take an organized step when moving away from home, with a 100% Ready Kit, and focus on socializing and discovering the new city you live in. This Kit gives you free access to the Starter Kit Benefits. This kit includes Room set, Kitchen set, Bathroom set, Laundry set, Cleaning set and, Study set.The entire kit will be delivered in one box with necessary padding preventing breakages during transportation and handling...",
      customization: [
        {
          matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
          towelcolor: ["white", "cream", "skyblue"],
          beddingcolor: ["white", "lightblue", "lightgrey"]
        },
        {
          name: [
            {
              matresssize: "Matters Size",
              towelcolor: "Towel Color",
              beddingcolor: "Bedding Color"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Essentials Kit",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/EK_540x.png?v=1554528797",
      price: 169.9,
      category: "Starter Kit",
      weight: 0,
      available: "false",
      description:
        "Take an organized step when moving away from home, with a 100% Ready Kit, and focus on socializing and discovering the new city you live in. This Kit gives you free access to the Starter Kit Benefits. This kit includes Room set, Kitchen set, Bathroom set, Laundry set, Cleaning set and, Study set.The entire kit will be delivered in one box with necessary padding preventing breakages during transportation and handling......",
      customization: [
        {
          matresssize: ["90x200 CM", "120x200 CM", "180x200 CM"],
          towelcolor: ["white", "cream", "skyblue"],
          beddingcolor: ["white", "lightblue", "lightgrey"]
        },
        {
          name: [
            {
              matresssize: "Matters Size",
              towelcolor: "Towel Color",
              beddingcolor: "Bedding Color"
            }
          ]
        }
      ]
    }
  ];

  addOnsKits = [
    {
      id: 1,
      name: "Kettle (1.7L)",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/kettle_360x.jpg?v=1554528800",
      price: 23.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description:
        "Take an organized step when moving away from home, with a 100% Ready Kit, and focus on socializing and discovering the new city you live in. This Kit gives you free access to the Starter Kit Benefits. This kit includes Room set, Kitchen set, Bathroom set, Laundry set, Cleaning set and, Study set." +
        "The entire kit will be delivered in one box with necessary padding preventing breakages during transportation and handling..."
    },
    {
      id: 2,
      name: "Toaster",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/toast_540x.jpg?v=1554528808",
      price: 24.49,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 3,
      name: "Hairdryer",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/fohn_360x.jpg?v=1554528799",
      price: 19.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 4,
      name: "MicroWave (700W)",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/micro_360x.jpg?v=1554528803",
      price: 74.9,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 5,
      name: "Steam Iron (2000W)",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/iron_360x.jpg?v=1554528807",
      price: 28.99,
      category: "Starter Kit",
      weight: 0,
      available: "false",
      description: "Take an organized step..."
    },
    {
      id: 6,
      name: "Table Ironing Board",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/yaya_360x.jpg?v=1554528808",
      price: 12.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 7,
      name: "3-Way Socket (pack of 2)",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/socket_360x.jpg?v=1554528794",
      price: 6.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 8,
      name: "Kitchen Bin with lid (16L)",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/yoyo_360x.jpg?v=1554528801",
      price: 14.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 9,
      name: "Oven Glove",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/540002-Linn-Oven-glove-Lead-grey-WP-1_1_360x.jpg?v=1554528804",
      price: 4.9,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 10,
      name: "Large Drying Rack",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/grey-sunbeam-drying-racks-cd45060-64_1000_360x.jpg?v=1554528802",
      price: 19.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 11,
      name: "Desk Organizers",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/desk_360x.jpg?v=1554528796",
      price: 12.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 12,
      name: "Fleece Blanket",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/fleece_360x.jpg?v=1554528798",
      price: 9.99,
      category: "Starter Kit",
      weight: 0,
      available: "false",
      description: "Take an organized step..."
    },
    {
      id: 13,
      name: "Small Storage Box (22L)",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/lbox_5d3a5e05-c61a-4c49-8945-87b268831e89_360x.jpg?v=1554528806",
      price: 5.99,
      category: "Starter Kit",
      weight: 0,
      available: "false",
      description: "Take an organized step..."
    },
    {
      id: 14,
      name: "Small Storage Box (65L)",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/lbox_360x.jpg?v=1554528803",
      price: 9.99,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    },
    {
      id: 15,
      name: "Toilet Brush",
      image:
        "https://cdn.shopify.com/s/files/1/0018/0210/8985/products/toilet-brush_360x.jpg?v=1554528809",
      price: 0.01,
      category: "Starter Kit",
      weight: 0,
      available: "true",
      description: "Take an organized step..."
    }
  ];

  getAllAddOnsKits = async () => {
    return await this.addOnsKits;
  };

  getAllStarterKits = async () => {
    return await this.starterkits;
  };
  getIndividualSet = async setId => {
    return await this.customKit.filter(item => item.setId === setId);
  };
  getIndividualSetIds = async () => {
    return await this.customKitId;
  };
  getIndividualSetItemList = async pId => {
    let productList = [];
    // eslint-disable-next-line array-callback-return
    await this.customKit.filter(item => {
      let selectedProduct = item.individualItems.filter(x =>
        pId.includes(x.productId)
      );

      if (selectedProduct.length) {
        productList.push(selectedProduct);
      }
    });

    return productList;
  };
}
