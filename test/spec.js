'use strict';

describe('angularCSS', function () {

    var expect = chai.expect;

    beforeEach(module('angularCSS'));

    it('should contain $css service', inject (function($css) {
        expect($css).not.to.equal(null);
    }));
    
});
