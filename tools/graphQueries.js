//This query gets related tabs for the menu
export const menuGraphQuery = `{
    menu{
      topPromoBanner
      logo
      menuTabs{
        menuTab{
          ...onmenu-tab{
            title
            slices{
              ...onmenu_sub_tab{
                variation{
                  ...ondefault-slice{
                    primary{
                      sectionTitle
                    }
                    items{
                      subSectionTitle
                      subSectionLink
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`

  //This query gets product data for home-page
  export const categoryPageGraphQuery = `{
    category-page{
      meta_title
      meta_description
      products{
        product{
          product
        }
      }
      slices
    }
  }`