
const { Console } = require('console');

/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name 
 * @returns {void}
 */
var filename= process.argv[2]? process.argv[2] : "database.json"
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  let fs = require('fs');
  const path=require('path');
  try{
        let data=fs.readFileSync(path.join(__dirname,'files',filename),'utf-8');
        let obj=JSON.parse(data)
        listt=obj;
  }
  catch(err){
      console.log(err);
  }

}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.slice(0,5) === 'hello'){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else if(text.slice(0,5) === 'check' && text.length>6){
    check(text.slice(6,text.length).replace('\n',''));
  }
  else if(text.slice(0,7) === 'uncheck' && text.length>8){
    uncheck(text.slice(8,text.length).replace('\n',''));
  }
  else if (text.slice(0,3)=== 'add'){
   add(text.slice(4,text.length).replace('\n',''));
  }
  else if (text.slice(0,6)=== 'remove'){
    remove(text.trim().substring(7))
  }
  else{
    if(text.slice(0,4)=== 'edit' && text.length>5){
      edit(text)
    }
    else
    {
      unknownCommand(text);
    }
  }
}


/**Setup: Why do bees stay in the hive in the winter?
Punchline: Swarm.
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text.trim() + '!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */

function quit(){
  let fs = require('fs');
  const path=require('path');
  const HOMSI = JSON.stringify(listt);
  fs.writeFileSync(path.join(__dirname,'files',filename),HOMSI,(err)=>{
       if(err) throw err;
  })
  process.on('uncaughtException' , err=>{
    console.error("error while saving")
  })
  console.log('Quitting now, goodbye!')
  process.exit();
}


function help(){
  console.log(' command to say Hello (name)! = hello (name) \n command to quit = quit / exit\n command to see the list = list\n command to add an object = add\n command to remove an object = remove\n command to check an object = check\n command to uncheck an object = uncheck\n command to edit an object = edit')
  
}

let listt = [
  {done:false, name: "wake up and code"},
  {done:false, name: "sleep and code"},
  {done:false, name: " up and code"},
  {done:false, name: "down and code"}
  ];

function list(){

  let i=1;
  listt.forEach(object => {
     
    if(object.done==false)
    {
      console.log(`${i} - [ ] ${object.name}`)
    }
    else
    {
      console.log(`${i} - [✓] ${object.name}`)
    }
    i++
  })
  const add = (task) => {
    listt.push(task);
    console.log(`"${task}" has been added to your task list\n`);
  };
}

function add(value){
  let object={
    name: value,
    done: false
  }
 if(value.trim().length==0)
 {
      console.log('Error')
  }
  else{
  listt.push(object)}
}

function remove(index){

  listt.splice(index-1, 1); 

}

function check(taskIndex) {
  if(taskIndex>=listt.length-1 && taskIndex<0)
  {
    console.log("unavailable index")
    return
  }
  else{
    listt[taskIndex-1].done = true
    console.log(`task ${taskIndex} is marked as checked\n`)
  }
}

function uncheck(taskIndex) {
  if(taskIndex>=listt.length-1 && taskIndex<0)
  {
    console.log("unavailable index")
    return
  }
  else{
    listt[taskIndex-1].done = false
    console.log(`task ${taskIndex} is marked as unchecked\n`)
  }
}

function edit(str){
       let index,item;
       if(!isNaN(str.trim().substring(5,6)))
       { 
        index=parseInt(str.trim().substring(5,6))-1
        item=str.trim().substring(6)
        
       }
       else
       {
           index=listt.length-1;
           item=str.trim().substring(5)
       }
       console.log(item)
       console.log(index)
       listt[index++].name=item
       console.log("task "+index+ " changed to "+item+"\n")
}







startApp("ALI")
