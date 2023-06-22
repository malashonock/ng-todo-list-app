import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ApiInterceptor } from './api.interceptor';
import { environment } from 'environments/environment';

describe('ApiInterceptor', () => {
  let apiInterceptor: ApiInterceptor;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
      ],
    });
    apiInterceptor = TestBed.inject(HTTP_INTERCEPTORS)[0];
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(apiInterceptor).toBeTruthy();
  });

  it('should intercept HTTP requests', () => {
    const relativeUrl = '/todos';
    const fullUrl = environment.API_BASE_URL + relativeUrl;

    httpClient.get(relativeUrl).subscribe();

    const req = httpTestingController.expectOne(fullUrl);
    httpTestingController.verify();
  });
});
