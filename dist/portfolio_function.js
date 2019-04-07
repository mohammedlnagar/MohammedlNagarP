var header = document.querySelector('#header');
var headerName = document.querySelector('#header .name');
var headerDiv = document.querySelector("#headerLinks");
var pointer = document.querySelector("#header .pointer");



window.onscroll = function () { scrollFunction() };



function scrollFunction() {


  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   //scrolling
                    if(window.matchMedia('(max-width:450px)').matches){
                      Object.assign(header.style,
                                
                        { height:'10vh',
                        padding:'0px',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        background:'rgba(0,0,0,0.5)'
                      }
                      );
                      Object.assign(headerName.style,

                        { fontSize:'5vw',
                        height:'50%',
                        width:'100%'}
                      );
                      Object.assign(headerDiv.style,

                        {fontSize:'3vw',
                        flexDirection:'row',
                        justifyContent:'space-around',
                        width:'100%',
                        height:'50%',
                        alignItems:'center'}
                      );
                      Object.assign(pointer.style,

                        {display:'none'}
                        );
                    }
                    else if(window.matchMedia('(max-width:800px) and (min-width:450px)').matches){
                      Object.assign(header.style,
                                
                        { padding:'10px 0px',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        background:'rgba(0,0,0,0.5)'
                      }
                      );
                      Object.assign(headerName.style,

                        { fontSize:'2.5vw',
                        height:'50%',
                        width:'100%'
                      }
                      );
                      Object.assign(headerDiv.style,

                          {fontSize:'2vw',
                          justifyContent:'space-around',
                          width:'100%',
                          height:'50%',
                          alignItems:'center'}
                        );
                        Object.assign(pointer.style,

                          {display:'none'}
                          );
                        
                    }
                    else{

                      Object.assign(header.style,
                                
                        { padding:'0.55px 0px',
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        background:'rgba(0,0,0,0.5)'
                      }
                      );
                      Object.assign(headerName.style,

                        { fontSize:'2vw',
                        width:'50%',
                        height:'100%'}
                      );
                      Object.assign(headerDiv.style,

                          {fontSize:'1vw',
                          justifyContent:'space-around',
                          height:'100%',
                          width:'50%',
                          alignItems:'center'}
                        );
                        Object.assign(pointer.style,

                          {display:'none'}
                          );
                    }

                       
}else{
                            
    // not scrolling
                      if(window.matchMedia('(max-width:450px)').matches){
                        Object.assign(header.style,
                                  
                          {
                          padding:'0px',
                          height:'100vh',
                          display:'flex',
                          flexDirection:'column',
                          background:'black'
                          }
                        );
                        Object.assign(headerName.style,
                        
                          {
                          fontSize:'3vh' ,
                          width:'100%',
                          height:'30%',
                    
                        }
                        );
                        Object.assign(headerDiv.style,
                        
                          {
                          fontSize:'2vh',

                          flexDirection:'column',
                        
                          justifyContent:'space-around',
                        
                          height:'50%',
                        
                          width:'100%',
                        
                          alignItems:'center',

                          }
                        );
                        Object.assign(pointer.style,
                        
                          {display:'flex',
                        
                            width:'100%',
                        
                            height:'70px',
                        
                            marginTop:'70px',


                          }
                          );
                      }else if(window.matchMedia('(max-width:800px) and (min-width:450px)').matches){
                        Object.assign(header.style,
                                  
                          { padding:'40vh 0px',
                          display:'flex',
                          flexDirection:'column',
                          background:'black'

                          }
                        );
                        Object.assign(headerName.style,
                        
                          { fontSize:'5vw' ,
                          width:'100%',
                          height:'50%'}
                        );
                        Object.assign(headerDiv.style,
                        
                          {fontSize:'3vw',
                        
                          justifyContent:'space-around',
                        
                          height:'50%',
                        
                          width:'100%',
                        
                          alignItems:'center'
                          }
                        );
                        Object.assign(pointer.style,
                        
                          {display:'flex',
                        
                            width:'100%',
                        
                            height:'70px',
                        
                            marginTop:'70px'
                          }
                          );
                          
                      }
                      else{
                        Object.assign(header.style,
                                  
                          { padding:'40vh 0px',
                          display:'flex',
                          flexDirection:'column',
                          background:'black'

                          }
                        );
                        Object.assign(headerName.style,
                        
                          { fontSize:'3vw' ,
                          width:'100%',
                          height:'50%'}
                        );
                        Object.assign(headerDiv.style,
                        
                          {fontSize:'2vw',
                        
                          justifyContent:'space-around',
                        
                          height:'50%',
                        
                          width:'100%',
                        
                          alignItems:'center'
                          }
                        );
                        Object.assign(pointer.style,
                        
                          {display:'flex',
                        
                            width:'100%',
                        
                            height:'70px',
                        
                            marginTop:'70px'
                          }
                          );
                          }
                      }
                                  

  }


headerName.addEventListener('click',
  (function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }));
pointer.addEventListener('click',
(function(){
  document.querySelector('#first').scrollIntoView({ behavior: 'smooth' });
})
);

  //scrolling
   /*  Object.assign(header.style,
  
        { padding:'0.55px 0px',
         display:'flex',
         flexDirection:'row',
         alignItems:'center'}
      );
      Object.assign(headerName.style,
  
        { fontSize:'2vw',
         width:'50%',
         height:'100%'}
      );
      Object.assign(headerDiv.style,
  
          {fontSize:'1vw',
           justifyContent:'space-around',
           height:'100%',
          width:'50%',
          alignItems:'center'}
        );
        Object.assign(pointer.style,
  
          {display:'none'}
          );*/

// not scrolling
    /*  
  Object.assign(header.style,
  
    { padding:'40vh 0px',
     display:'flex',
     flexDirection:'column',
    }
  );
  Object.assign(headerName.style,
  
    { fontSize:'3vw' ,
     width:'100%',
     height:'50%'}
  );
  Object.assign(headerDiv.style,
  
    {fontSize:'2vw',
  
    justifyContent:'space-around',
  
     height:'50%',
  
     width:'100%',
  
     alignItems:'center'
    }
  );
  Object.assign(pointer.style,
  
    {display:'flex',
  
      width:'100%',
  
      height:'70px',
  
      marginTop:'70px'
    }
    );
    }*/
