import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const dummyData = [
        {
          "contact": {
            "phone": {
              "$t": "(415) 587-1121 "
            },
            "state": {
              "$t": "CA"
            },
            "address2": {},
            "email": {
              "$t": "info@gratefuldogsrescue.org"
            },
            "city": {
              "$t": "San Francisco"
            },
            "zip": {
              "$t": "94141"
            },
            "fax": {},
            "address1": {
              "$t": "PO Box 411013"
            }
          },
          "age": {
            "$t": "Young"
          },
          "size": {
            "$t": "M"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/1/?bust=1492126528&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/1/?bust=1492126528&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/1/?bust=1492126528&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/1/?bust=1492126528&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/1/?bust=1492126528&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/2/?bust=1492126529&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/2/?bust=1492126529&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/2/?bust=1492126529&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/2/?bust=1492126529&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/2/?bust=1492126529&width=50&-t.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/3/?bust=1492616698&width=60&-pnt.jpg",
                  "@id": "3"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/3/?bust=1492616698&width=95&-fpm.jpg",
                  "@id": "3"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/3/?bust=1492616698&width=500&-x.jpg",
                  "@id": "3"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/3/?bust=1492616698&width=300&-pn.jpg",
                  "@id": "3"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37845982/3/?bust=1492616698&width=50&-t.jpg",
                  "@id": "3"
                }
              ]
            }
          },
          "id": {
            "$t": "37845982"
          },
          "shelterPetId": {
            "$t": "G17-030"
          },
          "breeds": {
            "breed": {
              "$t": "Pit Bull Terrier"
            }
          },
          "name": {
            "$t": "Zeke Adopt or Foster"
          },
          "sex": {
            "$t": "M"
          },
          "description": {
            "$t": "Zeke came to the shelter as a stray, but he adapted to the noisome environment very easily.He quickly learned to listen to his walkers and play with his fellow dogs. He can act silly one minute but calm down the next when asked. He hase some minor medical problems which should not be a problem. He is very people oriented and will lean on you or climb in a lap if allowed. He has some training and if you wish we can send you both to obedience class. Mostly he likes to be with you and be part of your life. We pay  for any medical or equipment needed and follow up with any help you need getting started.  Zeke is ready for  and needs a forever home. Let us introduce you to him. \n\nGrateful Dogs Rescue incurs substantial veterinary and other expenses in rescuing our dogs.  In order to recoup some of these costs, we request a tax-deductible donation for each adoption. The suggested donation for Zeke is $250.\n\nIf you are interested in adopting Zeke, please complete our online adoption application at http://www.gratefuldogsrescue.org/adoption-process.html or if you are interested in fostering please fill out our foster application at http://www.gratefuldogsrescue.org/foster-a-rescue-dog-1.html. One of our volunteers will get back to you. Adoptions are local, confined to the SF Bay Area."
          },
          "mix": {
            "$t": "yes"
          },
          "shelterId": {
            "$t": "CA792"
          },
          "lastUpdate": {
            "$t": "2017-04-23T20:22:24Z"
          },
          "animal": {
            "$t": "Dog"
          }
        },
        {
          "contact": {
            "phone": {
              "$t": "(415) 587-1121 "
            },
            "state": {
              "$t": "CA"
            },
            "address2": {},
            "email": {
              "$t": "info@gratefuldogsrescue.org"
            },
            "city": {
              "$t": "San Francisco"
            },
            "zip": {
              "$t": "94141"
            },
            "fax": {},
            "address1": {
              "$t": "PO Box 411013"
            }
          },
          "age": {
            "$t": "Young"
          },
          "size": {
            "$t": "M"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/1/?bust=1491587311&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/1/?bust=1491587311&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/1/?bust=1491587311&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/1/?bust=1491587311&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/1/?bust=1491587311&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/2/?bust=1491587312&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/2/?bust=1491587312&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/2/?bust=1491587312&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/2/?bust=1491587312&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/2/?bust=1491587312&width=50&-t.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/3/?bust=1492616951&width=60&-pnt.jpg",
                  "@id": "3"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/3/?bust=1492616951&width=95&-fpm.jpg",
                  "@id": "3"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/3/?bust=1492616951&width=500&-x.jpg",
                  "@id": "3"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/3/?bust=1492616951&width=300&-pn.jpg",
                  "@id": "3"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37801526/3/?bust=1492616951&width=50&-t.jpg",
                  "@id": "3"
                }
              ]
            }
          },
          "id": {
            "$t": "37801526"
          },
          "shelterPetId": {
            "$t": "Foster"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Staffordshire Bull Terrier"
              },
              {
                "$t": "Labrador Retriever"
              }
            ]
          },
          "name": {
            "$t": "Tanner    Foster or Adopt"
          },
          "sex": {
            "$t": "M"
          },
          "description": {
            "$t": "Tanner came  to ACC as a stray with a lame front paw which started to improve in a few days. An xray showed a hairline fracture of one non load bearing toe which had already started to heal. He didn't seem much bothered by it and was ready for new friends, both human and dog, right away. He really attaches to people and watches your eyes all the time. Tanner seems to be happiest being touched or leaning on you. He is house trained but needs obedience work which he is already taking to. We help with that if you would like some instruction or classes.  He should be relatively quiet for the next 4 weeks or so , but can take walks and live normally around the house. He just needs to avoid rough play or impact on his foot. We cover any costs for medical care while being fostered. Tanner will be a great family companion for a long time for whoever is lucky enough to adopt him. We think he is a mix of maybe Lab, Stafford- shire or  Visla? We will be doing a DNA test on him to be sure\n\nGrateful Dogs Rescue incurs substantial veterinary and other expenses in rescuing our dogs.  In order to recoup some of these costs, we request a tax-deductible donation for each adoption. The suggested donation for Tanner is $250.\n\nIf you are interested in adopting Tanner, please complete our online adoption application at http://www.gratefuldogsrescue.org/adoption-process.html or if you are interested in fostering please fill out our foster application at http://www.gratefuldogsrescue.org/foster-a-rescue-dog-1.html. One of our volunteers will get back to you. Adoptions are local, confined to the SF Bay Area."
          },
          "mix": {
            "$t": "yes"
          },
          "shelterId": {
            "$t": "CA792"
          },
          "lastUpdate": {
            "$t": "2017-04-24T00:54:08Z"
          },
          "animal": {
            "$t": "Dog"
          }
        },
        {
          "contact": {
            "phone": {
              "$t": "(415) 587-1121 "
            },
            "state": {
              "$t": "CA"
            },
            "address2": {},
            "email": {
              "$t": "info@gratefuldogsrescue.org"
            },
            "city": {
              "$t": "San Francisco"
            },
            "zip": {
              "$t": "94141"
            },
            "fax": {},
            "address1": {
              "$t": "PO Box 411013"
            }
          },
          "age": {
            "$t": "Young"
          },
          "size": {
            "$t": "M"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/1/?bust=1492993072&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/1/?bust=1492993072&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/1/?bust=1492993072&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/1/?bust=1492993072&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/1/?bust=1492993072&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/2/?bust=1492993073&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/2/?bust=1492993073&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/2/?bust=1492993073&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/2/?bust=1492993073&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/2/?bust=1492993073&width=50&-t.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/3/?bust=1492993074&width=60&-pnt.jpg",
                  "@id": "3"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/3/?bust=1492993074&width=95&-fpm.jpg",
                  "@id": "3"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/3/?bust=1492993074&width=500&-x.jpg",
                  "@id": "3"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/3/?bust=1492993074&width=300&-pn.jpg",
                  "@id": "3"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37912659/3/?bust=1492993074&width=50&-t.jpg",
                  "@id": "3"
                }
              ]
            }
          },
          "id": {
            "$t": "37912659"
          },
          "shelterPetId": {
            "$t": "Courtesy"
          },
          "breeds": {
            "breed": [
              {
                "$t": "American Bulldog"
              },
              {
                "$t": "Pit Bull Terrier"
              }
            ]
          },
          "name": {
            "$t": "Henry"
          },
          "sex": {
            "$t": "M"
          },
          "description": {
            "$t": "***This is a courtesy posting; we have not met or evaluated this dog. Please see the contact info at the end of this writeup.***\n\nMeet Henry.  He is 1-2 years old, male American Bulldog/pit mix. He's a good listener and fast learner but needs more socialization and training to be a good fit around other dogs. \n\nHe's a handsome guy and very loyal and affectionate. \n\nHere are some photos : https://goo.gl/photos/11oHyn4K2RWQHatf6\n\nIf you are interested in learning more about Henry or meeting him, please contact ksrottiesrus@gmail.com."
          },
          "mix": {
            "$t": "yes"
          },
          "shelterId": {
            "$t": "CA792"
          },
          "lastUpdate": {
            "$t": "2017-04-24T02:02:18Z"
          },
          "animal": {
            "$t": "Dog"
          }
        },
        {
          "contact": {
            "phone": {
              "$t": "(415) 272-4172  "
            },
            "state": {
              "$t": "CA"
            },
            "address2": {},
            "email": {
              "$t": "adoptions@muttville.org"
            },
            "city": {
              "$t": "San Francisco"
            },
            "zip": {
              "$t": "94141"
            },
            "fax": {
              "$t": "415-842-0320"
            },
            "address1": {
              "$t": "255 Alabama St"
            }
          },
          "age": {
            "$t": "Senior"
          },
          "size": {
            "$t": "S"
          },
          "media": {
            "photos": {
              "photo": [
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/1/?bust=1486772742&width=60&-pnt.jpg",
                  "@id": "1"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/1/?bust=1486772742&width=95&-fpm.jpg",
                  "@id": "1"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/1/?bust=1486772742&width=500&-x.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/1/?bust=1486772742&width=300&-pn.jpg",
                  "@id": "1"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/1/?bust=1486772742&width=50&-t.jpg",
                  "@id": "1"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/2/?bust=1486772742&width=60&-pnt.jpg",
                  "@id": "2"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/2/?bust=1486772742&width=95&-fpm.jpg",
                  "@id": "2"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/2/?bust=1486772742&width=500&-x.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/2/?bust=1486772742&width=300&-pn.jpg",
                  "@id": "2"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/2/?bust=1486772742&width=50&-t.jpg",
                  "@id": "2"
                },
                {
                  "@size": "pnt",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/3/?bust=1486772742&width=60&-pnt.jpg",
                  "@id": "3"
                },
                {
                  "@size": "fpm",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/3/?bust=1486772742&width=95&-fpm.jpg",
                  "@id": "3"
                },
                {
                  "@size": "x",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/3/?bust=1486772742&width=500&-x.jpg",
                  "@id": "3"
                },
                {
                  "@size": "pn",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/3/?bust=1486772742&width=300&-pn.jpg",
                  "@id": "3"
                },
                {
                  "@size": "t",
                  "$t": "http://photos.petfinder.com/photos/pets/37397405/3/?bust=1486772742&width=50&-t.jpg",
                  "@id": "3"
                }
              ]
            }
          },
          "id": {
            "$t": "37397405"
          },
          "shelterPetId": {
            "$t": "34608495"
          },
          "breeds": {
            "breed": [
              {
                "$t": "Chihuahua"
              },
              {
                "$t": "Mixed Breed"
              }
            ]
          },
          "name": {
            "$t": "Venus"
          },
          "sex": {
            "$t": "F"
          },
          "description": {
            "$t": "Venus is an adorable terrier mix gal who came to Muttville after her owner could no longer keep her. Now, this sweet girl is looking for her new forever home! She is still getting used to her new surroundings and, understandably, can be a bit timid. However, once she warms up to you she is a total lap down and a big cuddler. Venus also does great with other dogs, loves going for walks, and is said to be house-trained. Come meet this special girl soon! Venus is 7 years young and weighs 12 pounds."
          },
          "mix": {
            "$t": "no"
          },
          "shelterId": {
            "$t": "CA1287"
          },
          "lastUpdate": {
            "$t": "2017-04-26T21:56:43Z"
          },
          "animal": {
            "$t": "Dog"
          }
        }
      ]




ReactDOM.render(
    <App dogs={dummyData}/ >, document.getElementById('main')
);