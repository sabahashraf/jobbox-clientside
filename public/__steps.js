/*
1.npm install @reduxjs/toolkit react-redux
2.app-->store.js
3.index.js --->provider die store
4.features-->auth-->authSlice.js
5.authSlice initial stucture and import in store.js
6.firebase use korle async function use kora hoy oigula actual api call na ty createAsync func use korte hob not RTK query
7.akhon redux devtool die dekhte hob j state gula pacche kina
......firebase integration....
8.docs--fundamental-->get started with app-->web
9.create project -->project settings
10.npm i firebase
11.src-->firebase.config.js
12.check console.log(process.env)on app.js
...use firebase functions....
13.authSlice e createUser function banalam
14.useWatch die realtime e input field k watch kora jy
15.signup.js e jete hob dispatch korte hob.
16.sign up thikmoto kaj kore naki dekhlam..data.user.email e email ta pelam
17.authslice e samevab signInUser banalam
18.navbar e je email thakle logout dekhabe implement korlam
19.kintu reload korle chole jachche..user persistency dhore rakhte hob
20.sign in suucessful hole redirect korar jonno login.js e jete hob.!isLoading && email hole navigate to home
21.now logout implement korbo
22.navbar e korte hob.****akhon amra logout korle kono effect dekhte pabo na karon firebase theke logout hochche kintu local state e theke jachche****
23.ajonno simple logout reducer banalam..r dispatch korlam...then die dispatch korlam jate firebase theke succcessfully sign out hole ata kaj kore.
24.akhon persistency dhore rakhar jonno user k localstate e set korte hob..r application load howar shate shate onAuthStateCjange call hote hob..ty ata app.js e kora uchit
25.akta reducer banalam setUser r oita dispatch korlam app.js e
26.strict mode e useeffect er modhdhe duibar action run hoy
27.google login korbo same as before
28.akhon error handling korlam..signup and login page e isError r error nie nilam..then toast die error dekhalam.
29.loading thikmoto kaj kortece kina dekhar jonno isLoading app.js e console.log korlam.jotokhkhon user ase ny true user ashle false..ata private route er jonno important
...authentication done...
30.user login korle dashboard e nie jete hob
31.navbar e email && dashboard dekhao
32.akhon chinta korte hobe user employee hishabe login korbe naki candidate
33./register e logout obostate hit korle loading componenet dekhachchilo karon initially loading always true ty atak toggleLoading reducer die app.js a handle korlam
34.tahole amra role na thakle dashboard na dekhae /register route e nie jabo..see in navbar.js
.....api handles.........
35.features-->api--apiSlice..basic setup korlam
36.store e jete hob.rtk query quickstart dekhe korlam
37.auth-->authApi.js
38.register name e post method banalam
39.employer registration.js e jabo
40.tarpor call kore dibo postUser k..then network tab e gie user e click kore payload,preview dekhbo.
41.(akjon employer hishabe registration korle candidate hishabe parbe na ata implement korte hob)
42.akhon post kora datagulak redux store e store korte hob
43.first e refractor in authSlice initialState
44.then getUser banalam r app.js e dispatch korlam
45.akhon jodi amon hoy j user just sign up korce register kore ny shei caseta  chinta korte hob.tahole duivab chinta korte hob.user register korce r user sign up korce register kore ny
46.ajonno server side e age logic likhlam result er modhdhe  jodi email thake tahole status true r result return koro nahole status false return koro
47.arpor authslice e je getuser e status true hole data payload e pass koro nahole email ta return koro .
48.akhon jei user register kore ny tar register korale akta redirect dite hob.. r shate shate role update hochche na..reload marle hochche..register korar por jate shate shate state e user er data ashe pore ajonno akhon kaj korte hob
49.read anatomy of create api
50.search tag types..nicher dik onQueryStarted
60.akhon ata use kore registration er jonno data post korar por por e getuserk call korlam jate realtime e data ashe pore
61.akhon registration form e jano age theke email pai ajonno useselector die email ane defaultvalues hoshabe email set korlam,.input field disable korlam..class cursor-not-allowed add korlam
62.dashboard e dhukle akta add job page ase..okhane form ta handle korte hob
63.features-->job--jobApi
64.postJob method banalam add job page e use korbo.
65.akhon datatak fetch kore job page e dekhate hob
66.getJob,getAllJobs banalam..job page e dekhabo
67.(job page e first e undefined ashte pare ty data.data ||{ }ata korlam)akhane map korlam tarpor job card e dekhabo..okhane details button e click korele individual job details dekhanor kotha..job details page e jeye usegetJobquery die individual details show korlam.
68.job add korar por jobs(nav) e gele jobta dekhae na..refetch kortese na..load korle refetch kore..ata handle korte hob
69.ata tagtypes die handle korlam apislice r jobapi te
70.akhon job details page e akta apply button ase..okhane amra k apply korce plus question korle sheta dhukabo..akhon jobdetails er datata add jobs page theke ashtece..oikhane postJob ta refractor korlam.
71.{...data,applicant:[],queries:[]}
72.apply button e press korle patch korbo r userid,his email r job id pathabo
73.akhon job er jonno candidates apply korbe shudhu ata handle korteci.
74.akhon akta mutation add korbo jate datata backend e post korte pari
75.jobdetails page e call korbo
73.user add job korte parbe na r user kontate apply korce ta dekhate hob
74.sidebar e route r component thik korlam
75.applied jobs e user er apply kora jobs dekhalam
76.akhon question answer handle korte hob..ajonno questioner jonno userid,jobid,email,question pathate  hob..reply er jonno jobid userid,reply pathate hob.
77.job details e jete hob sendQuestion func banalam..
78.akhon reply shobai dite parbe na shudhu employer dite parbe
79.user.role candidate hole ask a question dekhao
80.reply handle er khtre userid ta j question korce tarta nite hob ty react hook form use korte parbo na.manually korte hob
81.akhon realtime e korr jonno tagtypes add korte hob
82.last akta problem theke jy employer k question korle realtime e employer er kache jy na ajonno polling korte pari..nirdishto shomoy por por data fetch korte pari
83.jehetu datata getjobquery(id ) ashtece okhane apply korte hob..1 min er jonno 10000 ms boshate hob.












*/
