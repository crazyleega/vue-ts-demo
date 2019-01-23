declare namespace HttpAxios {

  export interface AxiosResponse {
    data: HttpResponse;
  }

  export interface HttpResponse {
    /**
     * 状态码
     * @type { number }
     */
    code: number;

    /**
     * 数据
     * @type { any }
     */
    result: any;

    /**
     * 消息
     * @type { string }
     */
    message?: string
  }
}