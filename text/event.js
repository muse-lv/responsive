
var eventUtil={
  // 添加事件监听程序
  addHandler:function(element,type,handler){
    if(element.addEventListener){
      element.addEventListener(type,handler,false);
    }else if(element.attachEvent){
      element.attachEvent('on'+type,handler);
    }else{
      element['on'+type]=handler;
    }          
  },

  // 删除事件监听程序
  removeHandler:function(element,type,handler){
    if(element.removeEventListener){
      element.removeEventListener(type,handler,false);
    }else if(element.detachEvent){
      element.detachEvent('on'+type,handler);
    }else{
      element['on'+type]=null;
    }          
  },

  //获取事件
  getEvent:function(event){
    return event?event:window.event;
  },

  //事件类型
  getType:function(event){
    return event.type;
  },

  //事件的目标
  getElement:function(event){
    return event.target || event.srcElement;
  },
  //阻止事件的默认行为
  preventDefault:function(event){
    if(event.preventDefault){
      event.preventDefault();
    }else{
      event.returnValue=false;
    }
  },  

  //阻止事件冒泡
  stopPropagation:function(event){
    if (event.stopPropagation) {
      event.stopPropagation();
    }else{
      event.cancelBubble=true;
    }
  }
};
