import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
    console.log('http service');
  }


  public request<T>(params: any): any {
    console.log('request object>' + JSON.stringify(params));
    if (params['method'] === 'post' || params['method'] === 'POST') {
      return this.post<T>(params['url'], params['data']);
    } else {
      return this.get<T>(params['url'], params['data']);
    }
  }

  public post<T>(url: string, params: any) {
    return this.http
      .post<T>(url, params)
      .subscribe(res => {
        this.handleSuccess(res);
      });
  }

  public get<T>(url: string, params: any): any {
    return this.http
      .get(url, {params: params})
      .subscribe(res => {
        this.handleSuccess(res);
      });
  }

  private handleSuccess<T>(res) {
    // const body = res['_body'];
    // const tocken = res['tocken'];
    console.log('handleSuccess--->' + res);
    // if (body) {
    //   console.log('handleSuccess_headers-->' + JSON.stringify(res.headers));
    //   console.log('handleSuccess_body-->' + JSON.stringify(body));
    //   console.log('handleSuccess_res-->' + res.toString);
    //   return {
    //     data: body,
    //     statusText: res.statusText,
    //     status: res.status,
    //     success: res.ok,
    //     token: tocken
    //   };
    // } else {
    //   console.log('handleSuccess_body_empty-->' + JSON.stringify(body));
    //   return {
    //     statusText: res.statusText,
    //     status: res.status,
    //     success: true
    //   };
    // }
  }

  /**
   * 处理请求错误
   * @param error
   * @returns {void|Promise<string>|Promise<T>|any}
   */
  private handleError(error) {
    console.log(error);
    const msg = '请求失败';
    if (error.status === 400) {
      console.log('请求参数正确');
    }
    if (error.status === 404) {

      console.error('请检查路径是否正确');
    }
    if (error.status === 500) {
      console.error('请求的服务器错误');
    }
    console.log(error);
    return {success: false, msg: msg};

  }
}
