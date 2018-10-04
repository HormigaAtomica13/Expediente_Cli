var room = 1;
function Campos_Laborales() {
 
    room++;
    var objTo = document.getElementById('Campos_Laborales')
    var divtest = document.createElement("div");
	divtest.setAttribute("class", "form-group removeclass"+room);
	var rdiv = 'removeclass'+room;
    divtest.innerHTML = `<div class="w3-container w3-card-4">

    <br> <div class="w3-row-padding">

             <div class="w3-third">
                     <label>Nombre de la empresa</label>
                     <input class="w3-input" type="text">
             </div>

             <div class="w3-third">
                   <label>Tiempo laborado</label>
                   <input class="w3-input" type="text">
                                                                         
             </div>
                                                        
             <div class="w3-third">
                     <label>Puesto</label>
                     <input class="w3-input" type="text">
             </div>

     </div>

     <br><div class="w3-row-padding">
           <div class="w3-third">
                    <label>Químico-<br>Tóxico &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>
                    <label>Si</label>
                    <input class="w3-radio" type="radio" name="Grupo1" value="Si" required="Requerido"/>
                    <label>No</label>
                    <input class="w3-radio" type="radio" name="Grupo1" value="No" required="Requerido"/>
            </div>

           <div class="w3-third">
                   <label>Frecuencia</label>
                   <input class="w3-input" type="text">
           </div>

           <div class="w3-third">
                   <label>Uso de EPP &nbsp</label> 
                   <label>Si</label>
                   <input class="w3-radio " type="radio" name="Grupo12" value="Si" required="Requerido"/>
                   <label>No</label>
                   <input class="w3-radio " type="radio" name="Grupo12" value="No" required="Requerido"/>

           </div>
   </div>

   <div class="w3-row-padding">

           <div class="w3-third">
                   <label>Ruido <br> intenso &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label> 
                   <label>Si</label>
                   <input class="w3-radio " type="radio" name="Grupo2" value="Si" required="Requerido"/>
                   <label>No</label>
                   <input class="w3-radio " type="radio" name="Grupo2" value="No" required="Requerido"/>
           </div>
           
           <div class="w3-third">
                   <label>Frecuencia</label>
                   <input class="w3-input" type="text">
           </div>
           <div class="w3-third">
                   <label>Uso de EPP &nbsp</label>
                   <label>Si</label>
                   <input class="w3-radio " type="radio" name="Grupo21" value="Si" required="Requerido"/>
                   <label>No</label>
                   <input class="w3-radio " type="radio" name="Grupo21" value="No" required="Requerido"/>

                   
            </div>
   </div>
   
   <div class="w3-row-padding">

           <div class="w3-third">
                   <label>Accidentes<br> laborales &nbsp&nbsp&nbsp</label>
                   <label>Si</label>
                   <input class="w3-radio" type="radio" name="Grupo3" value="Si" required="Requerido"/>                                
                   <label>No</label>
                   <input class="w3-radio" type="radio" name="Grupo3" value="No" required="Requerido"/>                                

           </div>

           <div class="w3-third">
                 <label>Motivo</label>
                 <input class="w3-input" type="text">
                                                                       
           </div>
                                                      
           <div class="w3-third">
                   <label>Lugar de la lesión</label>
                   <input class="w3-input" type="text">
           </div>

   </div>

   <div class="w3-row-padding">
          
           <div class="w3-third">
                   <label>Secuelas &nbsp&nbsp&nbsp</label> 
                   <label>Si</label>
                   <input class="w3-radio" type="radio" name="Grupo4" value="Si" required="Requerido"/>
                   <label>No</label>
                   <input class="w3-radio" type="radio" name="Grupo4" value="No" required="Requerido"/>
           </div>   
           <div class="w3-third">
                 <label>¿Cuáles?</label>
                 <input class="w3-input" type="text">
         </div>
                                           
   </div>

<div class="input-group-btn">
 <button class="btn btn-danger"  type="button"  onclick="remove_Campos_laborales(`+room+`);"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>  </button>
</div>


 </div> 


<div class="clear"></div>
       
    `;
    objTo.appendChild(divtest)
}
   function remove_Campos_laborales(rid) {
	   $('.removeclass'+rid).remove();
   }
