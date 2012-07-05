
var animals = ['aardvark','addax','alligator','alpaca','anteater','antelope','aoudad','ape',
    'argali','armadillo','ass','baboonbadger','basilisk','bat','bear','beaver','bighorn',
    'bison','boar','budgerigar','buffalo','bull','bunny','burro','camel','canary','capybara',
    'cat','chameleon','chamois','cheetah','chimpanzee','chinchilla','chipmunk','civet',
    'coati','colt','cony','cougar','cow','coyote','crocodile','crow','deer','dingo','doe',
    'dog','donkey','dormouse','dromedary','duckbill','dugong','eland','elephant','elk',
    'ermine','ewe','fawn','ferret','finch','fish','fox','frog','gazelle','gemsbok','giraffe',
    'gnu','goat','gopher','gorilla','grizzly bear','ground hog','guanaco','hamster','hare',
    'hartebeest','hedgehog','hippopotamus','hog','horse','hyena','ibex','iguana','impala',
    'jackal','jaguar','jerboa','kangaroo','kid','kinkajou','kitten','koala','koodoo','lamb',
    'lemur','leopard','lion','lizard','llama','lovebird','lynx','mandrill','mare','marmoset',
    'marten','mink','mole','mongoose','monkey','moose','mouse','mule','musk deer','musk-ox',
    'muskrat','mustang','newt','ocelot','okapi','opossum','orangutan','oryx','otter','ox',
    'panda','panther','parakeet','parrot','peccary','pig','platypus','pony','porcupine',
    'porpoise','pronghorn','puma','puppy','quagga','rabbit','raccoon','ram','rat','reindeer',
    'reptile','rhinoceros','roebuck','salamander','seal','sheep','shrew','skunk','sloth','snake',
    'springbok','squirrel','stallion','steer','tapir','tiger','toad','turtle','vicuna','walrus',
    'warthog','waterbuck','weasel','whale','wildcat','wolf','wolverine','wombat','woodchuck',
    'yak','zebra','zebu'];

exports.rand = function(){
  var index = Math.floor(Math.random()*(animals.length-1));
  return animals[index]
};
