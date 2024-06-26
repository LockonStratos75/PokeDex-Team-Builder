import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
  },
  pokemonInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 18,
    margin: 10,
    marginBottom: 4,
    borderColor: '#2d2d2d',
    borderRadius: 10,
    backgroundColor: '#121212',
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#121212',
    color: '#fff',
    paddingHorizontal: 16,
    borderRadius: 10,
    width: '90%',
    margin: 10,
    alignSelf: 'center',
  },
  error: {
    color: 'red',
    fontSize: 14,
    margin: 10,
  },
  img: {
    width: 80,
    height: 80,
  },
  pokeDetails: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#ff6961',
    width: '90%',
    height: 50,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  circleButton: {
    backgroundColor: '#ff6961',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  // addIcon: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 10,
  // },
  text: {
    color: 'white',
  },
  mainB: {
    // backgroundColor: '#F8F8FF',  GhostWhite
    backgroundColor: '#121212',
    marginBottom: 8,
  },
  pokeNameText: {
    color: '#fdfdfd',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    width: 18,
    height: 18,
    color: 'white',
    marginRight: 4,
  },
  pokeAttributeView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeIconButton: {
    backgroundColor: '#121212',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    height: 40,
    width: 40,
  },
  mainPokeImg: {
    width: 170,
    height: 170,
    alignSelf: 'center',
  },

  pokeIcons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'capitalize',
    color: '#fdfdfd',
  },
  Center: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  dashButton: {
    height: 130,
    width: 130,
    margin: 10,
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  iconMed: {
    width: 30,
    height: 30,
  },
  iconBig: {
    width: 60,
    height: 60,
  },
  dashButtonGroup: {
    marginTop: 64,
  },
  teamName: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: 8,
  },
  teamContainer: {
    marginTop: 16,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#121212',
    padding: 20,
    borderRadius: 10,
  },
  teamButton: {
    backgroundColor: '#262626',
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h2: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  detail: {
    padding: 15,
    backgroundColor: '#121212',
    marginVertical: 4,
    // marginRight: 20,
    width: '90%',
    borderRadius: 12,
  },
  detailsContainer: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '50%',
    // flexWrap: 'wrap',
    // width: '70%',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  statBar: {
    height: '100%',
    // width: '100%',
    backgroundColor: '#007BFF',
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  typeImage: {
    padding: 7,
    backgroundColor: '#eee',
    borderRadius: 50,
  },
  bug: {
    backgroundColor: '#92BC2C',
    shadowColor: '#92BC2C',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  dark: {
    backgroundColor: '#595761',
    shadowColor: '#595761',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  dragon: {
    backgroundColor: '#0C69C8',
    shadowColor: '#0C69C8',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  electric: {
    backgroundColor: '#F2D94E',
    shadowColor: '#F2D94E',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  fire: {
    backgroundColor: '#FBA54C',
    shadowColor: '#FBA54C',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  fairy: {
    backgroundColor: '#EE90E6',
    shadowColor: '#EE90E6',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  fighting: {
    backgroundColor: '#D3425F',
    shadowColor: '#D3425F',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  flying: {
    backgroundColor: '#A1BBEC',
    shadowColor: '#A1BBEC',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  ghost: {
    backgroundColor: '#5F6DBC',
    shadowColor: '#5F6DBC',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  grass: {
    backgroundColor: '#5FBD58',
    shadowColor: '#5FBD58',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  ground: {
    backgroundColor: '#DA7C4D',
    shadowColor: '#DA7C4D',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  ice: {
    backgroundColor: '#75D0C1',
    shadowColor: '#75D0C1',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  normal: {
    backgroundColor: '#A0A29F',
    shadowColor: '#A0A29F',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  poison: {
    backgroundColor: '#B763CF',
    shadowColor: '#B763CF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  psychic: {
    backgroundColor: '#FA8581',
    shadowColor: '#FA8581',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  rock: {
    backgroundColor: '#C9BB8A',
    shadowColor: '#C9BB8A',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  steel: {
    backgroundColor: '#5695A3',
    shadowColor: '#5695A3',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  water: {
    backgroundColor: '#539DDF',
    shadowColor: '#539DDF',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },

  statRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statText: {
    textTransform: 'capitalize',
    color: 'white',
    width: 100,
  },
  statBarContainer: {
    flex: 1,
    marginLeft: 10,
  },
  statValue: {
    color: 'white',
    width: 40,
    textAlign: 'right',
  },
  move: {
    backgroundColor: 'black',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  moveGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dexText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(253,253,253,0.36)',
  },
  dexTextView: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
