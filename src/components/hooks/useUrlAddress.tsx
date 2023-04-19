type textObjectTypes = {
  titleText: string
  placeholderText: string
  buttonText: string
  errorText: string
}

const useUrlAddress = (address: string) => {
  let textObject: textObjectTypes

  switch (address) {
    case 'recipes':
      textObject = {
        titleText: 'Recipes',
        placeholderText: 'Search recipe...',
        buttonText: 'Search',
        errorText: 'There is no recipe with this name!',
      }
      break
    case 'calories':
      textObject = {
        titleText: 'Calories',
        placeholderText: 'Check ingredient calories...',
        buttonText: 'Check',
        errorText: 'There is no ingredient with this name!',
      }
      break
    case 'favorites':
      textObject = {
        titleText: 'Favorites',
        placeholderText: 'Search favorite recipe...',
        buttonText: 'Search',
        errorText: 'There is no favorite item with this name!',
      }
      break
    case 'shopping_list':
      textObject = {
        titleText: 'Shopping List',
        placeholderText: 'Add product to list...',
        buttonText: 'Add',
        errorText: 'There is no ingredient with this name!',
      }
      break
    default:
      textObject = {
        titleText: 'Recipes',
        placeholderText: 'Search recipe...',
        buttonText: 'Search',
        errorText: 'There is no item with this name!',
      }
  }

  return textObject
}

export default useUrlAddress
