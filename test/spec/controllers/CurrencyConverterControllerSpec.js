describe('CurrencyConverterController', function() {

    var $rootScope, CurrencyExchangeData, createController;
    beforeEach(
        inject(function($injector, $q) {
            var deferred = $q.defer();
            deferred.resolve('{"to": "EUR", "rate": 0.73236699999999999, "from": "USD"}');

            CurrencyExchangeData = $injector.get('CurrencyExchangeData');

            $rootScope = $injector.get('$rootScope');

            $controller = $injector.get('$controller');

            createController = function() {
                return $controller('CurrencyConverterController', {
                    '$scope': $rootScope
                })
            };

            spyOn(CurrencyExchangeData, 'getData').and.returnValue(deferred.promise);
        })
    );

    it('should have the correct attributes',  function() {
        var controller = createController();
        expect(controller.getExchangeRate()).toBe('0.7323');
    });
});
