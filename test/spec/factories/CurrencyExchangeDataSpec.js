describe('CurrencyExchangeData', function() {

   it('should exist', inject(function(CurrencyExchangeData) {
       expect(CurrencyExchangeData).toBeDefined();
   }));

   it('should have a getData() function', inject(function(CurrencyExchangeData){
       expect(CurrencyExchangeData.getData()).toBeDefined();
   }));

   //it('should return the json file')

});
