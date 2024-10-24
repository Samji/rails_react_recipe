# Array of possible colours
colours = ['Red', 'Green', 'Blue', 'Yellow', 'Purple']
descriptions = ['Juicy', 'Cool', 'Mellow', 'Grown on the Hills of Appalachia', 'Grown in Sweden']

9.times do |i|
  Flower.create(
    name: "Flower #{i + 1}",
    colour: colours.sample,
    description: descriptions.sample
  )
end

1.times do |i|
  Pokemon.create(
    name: "Bulbasaur",
    description: "Bulbasaur is a small, mainly turquoise amphibian Pokémon with red eyes and a green bulb on its back. It is based on a frog/toad, with the bulb resembling a plant bulb that grows into a flower as it evolves.",
    image: "https://img.pokemondb.net/artwork/avif/bulbasaur.avif",
    health: 45,
    attack: 49,
    defense: 49,
    speed: 45
  )
end

9.times do |i|
  Recipe.create(
    name: "Recipe #{i + 1}",
    ingredients: '227g tub clotted cream, 25g butter, 1 tsp cornflour,100g parmesan, grated nutmeg, 250g fresh fettuccine or tagliatelle, snipped chives or chopped parsley to serve (optional)',
    instruction: 'In a medium saucepan, stir the clotted cream, butter, and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.'
  )
end