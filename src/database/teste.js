const db = require('./db')
const createProffy = require('./createProffy')

db.then(async(db) => {
  //Inserir dados

  proffyValue = {
    name: "Mayk Brito",
    avatar:"https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "8998877565",
    bio: "Instrutor de Ciências",
  }

  classValue = {
    subject: 2,
    cost:"30",
    
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  
  await createProffy(db, { proffyValue, classValue, classScheduleValues })
  
  //Consultar dados inseridos

  //todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectedProffys)

  //consultar as classes de um determinado professor
  //e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1; 
  `)
  //console.log(selectClassesAndProffys);

    //o horário que a pessoa trabalha, é das 8h às 18h
    //o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    //o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
      SELECT class_schedule.* 
      FROM class_schedule
      WHERE class_schedule.class_id = 2
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "1300"
      AND class_schedule.time_to > "1300"   
  `)
  console.log(selectClassesSchedules)  
})

