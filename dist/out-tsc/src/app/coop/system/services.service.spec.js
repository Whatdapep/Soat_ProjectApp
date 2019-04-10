import { TestBed } from '@angular/core/testing';
import { ServicesService } from './services.service';
describe('ServicesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ServicesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=services.service.spec.js.map