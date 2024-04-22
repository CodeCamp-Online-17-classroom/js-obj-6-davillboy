// write code here
<script>
        function isEmpty(obj) {
            for (let key in obj) {
              
              if (obj.hasOwnProperty(key)) {
                return false;
              }
            }
           
            return true;
          }
        
          let emptyObj = {};
          let objWithProperties = { key: 'value' };
          
          console.log(isEmpty(emptyObj));
          console.log(isEmpty(objWithProperties)); 
          
    </script>
