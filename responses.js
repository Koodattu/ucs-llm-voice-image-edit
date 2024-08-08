const responses = {
  en: {
    createOrEditReminderReplies: [
      "Try saying something like 'make me a new image of an AI agent'",
      "New image? Say something like 'create an image of the seaside'",
      "Need an image idea? Try saying 'new image of a Finnish forest'?",
      "How about winter in the picture? Say 'edit the image to be wintery'",
      "Edit idea? 'edit the image with a starry sky'",
      "How about, 'what if it was night in the picture'?",
      "This is also possible: 'make a video from this image'",
      "You probably didn't guess this: 'make a video from the image'",
      "Didn't like it? Say 'go back to the previous image'",
      "If you're not satisfied, you can say 'let's cancel this change'",
    ],
    createReplies: [
      "Creating an image, it won't take long!",
      "Image is being created, don't worry!",
      "A new image is coming, stay tuned!",
      "Creating a masterpiece, don't get nervous!",
      "A new image is coming up, be patient!",
      "Setting up the image, just a moment!",
      "It'll be ready soon, stay with us!",
      "The image is almost done, hold on!",
      "Creating an image, it will take a bit!",
      "Image creation in progress, wait a moment!",
    ],
    editReplies: [
      "Editing the image, hope for the best!",
      "Image is being edited, patience!",
      "Image tweaking in progress, hold on!",
      "Improving the image, almost ready!",
      "Editing the image, stay calm!",
      "Reworking the image, just a moment!",
      "Tweaking the image, wait a moment!",
      "Image editing in progress, just a moment!",
      "Editing the image, hold on!",
      "Fine-tuning the image, wait a moment!",
    ],
    videoReplies: [
      "Creating a video, it will take a moment!",
      "Video processing, patience!",
      "Working on the video, stay calm!",
      "Video creation in progress, wait!",
      "Making a video, please wait!",
      "Starting the video, just a moment!",
      "Video creation started, hold on!",
      "Creating the video, stay tuned!",
      "Making a video, just a moment!",
      "Video in progress, hold on!",
    ],
    undoReplies: [
      "Didn't go quite right!",
      "Sometimes it happens, try again!",
      "Didn't hit the mark? No worries!",
      "Didn't get the desired result?",
      "It doesn't always work, but keep trying!",
      "It didn't go as planned...",
      "A small mistake can be a big discovery!",
      "No failures, only lessons!",
      "Failure is a step forward!",
      "No mistakes, only happy accidents!",
    ],
    errorReplies: [
      "Something went wrong, try again!",
      "An error occurred, please try again!",
      "Oops, it went wrong, try again!",
      "Something went wrong, try again!",
      "Error detected, try again!",
      "An error occurred, try again!",
      "It didn't go well, try again!",
      "Error situation, try again!",
      "Something went wrong, try again!",
      "Oops, try again!",
    ],
    doneReplies: [
      "Here's the result, what do you think? It's not a dog without fur!",
      "Image is ready, is it good? Made by us!",
      "It's done, do you like it? We'll do better next time!",
      "Image is ready, what do you say? Better one bird in the hand than ten in the bush!",
      "Here's the result, how does it look? Not just any bird!",
      "Ready image, is it acceptable? Not bad, even if I say so myself!",
      "Here's the result, what do you think? Better than the neighbor's dog!",
      "Now it's pretty, isn't it? Fits like a glove!",
      "Here's the ready image, do you like it? It didn't go like Strömsholm!",
      "Image ready, what's the feeling? Made by me!",
    ],
  },
  fi: {
    createOrEditReminderReplies: [
      "Koita vaikka sanoa notta 'tees mulle uus kuva tekoälyagentista'",
      "Uuteen kuvaan? Sano vaikka 'luo kuva merenrannasta'",
      "Kuvaidea hukassa? Koita vaikka 'uusi kuva Suomen metsästä'?",
      "Mitä jos kuvassa olisikin talvi? Sano vaikka 'muokkaa kuvaa talviseksi'",
      "Muokkausidea? 'muokkaa kuvaan tähtitaivas'",
      "Mites vaikka, 'mitä jos kuvassa olisi yö'?",
      "Tämäkin on mahdollista: 'tee tästä kuvasta video'",
      "Tätä et pakosti arvannut: 'tees kuvasta video'",
      "Ei tullu mieluista? Sano että 'mennään edelliseen kuvaan'",
      "Jos et ole tyytyväinen, voit sanoa 'perutaan tämä muutos'",
    ],
    createReplies: [
      "Pistetään kuvaa tulille, ei kestä kauaa!",
      "Kuvaa väsätään, älä hättäile!",
      "Uutta kuvaa pukkaa, pysy linjoilla!",
      "Luodaan mestariteosta, älä hermostu!",
      "Uutta kuvaa syntyy, malta mieles!",
      "Viritellään kuvaa, hetki vain!",
      "Kohta se o valmis, pysy kyydissä!",
      "Kuva on kohta näpissä, malta hetki!",
      "Luodaan kuvaa, kestää vähän!",
      "Kuvanteko käynnissä, odotahan pieni hetki!",
    ],
    editReplies: [
      "Muokataan kuvaa, toivotaan parasta!",
      "Kuvaa muokataan, kärsivällisyyttä!",
      "Kuvan viilaus menossa, malta hetki!",
      "Parannellaan kuvaa, kohta valmista!",
      "Muokataan kuvaa, pysy rauhassa!",
      "Uusiks pistetään kuvaa, hetki vaan!",
      "Kuvaa viilataan, oota hetki!",
      "Kuvan editointi käynnissä, hetki vaan!",
      "Muokataan kuvaa, malttia!",
      "Viilataan kuvaa, oota hetki!",
    ],
    videoReplies: [
      "Videota tehhään, hetki menee!",
      "Videon käsittelyssä, kärsivällisyyttä!",
      "Videota työstetään, pysy rauhallisena!",
      "Videon luominen käynnissä, odota!",
      "Videota tehtäessä, odotahan!",
      "Pistetään video käyntiin, hetki vaan!",
      "Videon teko aloitettu, malta hetki!",
      "Videota syntyy, pysy linjoilla!",
      "Videota luodaan, oota pieni hetki!",
      "Video työn alla, malta hetki!",
    ],
    undoReplies: [
      "Eipä tainnu mennä ihan putkeen!",
      "Joskus käy näin, uudestaan vaan!",
      "Ei osunu nappiin? Ei hätää!",
      "Ei tullut toivottua tulosta?",
      "Aina ei onnistu, mutta yrittänyttä ei laiteta!",
      "Ei menny niinku Strömssössä...",
      "Pieni virhe voi olla suuri löytö!",
      "Ei oo epäonnistumisia, on vaan oppeja!",
      "Epäonnistuminen on askel eteenpäin!",
      "Ei virheitä, vain iloisia vahinkoja!",
    ],
    errorReplies: [
      "Jotain meni pieleen, yritä uusiks!",
      "Virhe tapahtu, kokeilepa uudelleen!",
      "Hups, vikaan meni, yritä uusiks!",
      "Jokin meni pieleen, koetahan uudelleen!",
      "Virhe havaittu, yritä uusiks!",
      "Tapahtu virhe, koita uudelleen!",
      "Ei menny putkeen, yritä uusiks!",
      "Virhetilanne, yritäpä uusiks!",
      "Jokin meni vikaan, koita uudelleen!",
      "Hupsista, kokeile uusiks!",
    ],
    doneReplies: [
      "Tälläänen siitä tuli, mitä tykkäät? Ei oo koira karvoistansa!",
      "Kuva valmis, onko hyvä? Meirän tekemä!",
      "Valmista tuli, maistuuko? Pannaan paremmaksi ens kerralla!",
      "Kuva on valmis, mitäs sanot? Parempi pyy pivossa ku kymmenen oksalla!",
      "Tässä on lopputulos, miltä näyttää? Ei mikään harakanvarvas!",
      "Valmis kuva, kelpaako? Ei hassumpi, vaikka itte sanon!",
      "Lopputulos tässä, mitä tuumit? Parempi ku naapurin koira!",
      "Nyt tuli nätti, eikös vain? Käy ku nenä päähän!",
      "Tässä valmis kuva, mitäs tykkäät? Eikä mennyt ku Strömssöössä!",
      "Kuva valmis, mikä fiilis? Meikä mankeli tekase!",
    ],
  },
};
