import { UrlHookObjectTypes } from '../helpers/types'

const useUrlAddress = (address: string) => {
  let textObject: UrlHookObjectTypes

  switch (address) {
    case 'recipes':
      textObject = {
        titleText: 'Recipes',
        placeholderText: 'Search recipe by name...',
        buttonText: 'Search',
      }
      break
    case 'products':
      textObject = {
        titleText: 'Products',
        placeholderText: 'Check product nutritional values...',
        buttonText: 'Check',
      }
      break
    case 'favorites':
      textObject = {
        titleText: 'Favorites',
        placeholderText: 'Search favorite recipe...',
        buttonText: 'Search',
      }
      break
    case 'shopping_list':
      textObject = {
        titleText: 'Shopping List',
        placeholderText: 'Add product to list...',
        buttonText: 'Add',
      }
      break
    default:
      textObject = {
        titleText: 'Recipes',
        placeholderText: 'Search recipe...',
        buttonText: 'Search',
      }
  }

  return textObject
}

export default useUrlAddress
