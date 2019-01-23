declare namespace StoreState {

  export interface post {
      _id: string,
      title: string,
      content: string,
      cover_imgs: string[],
      from: string,
      type: number,
      from_type: number,
      status: number,
      createdAt: string,
      updatedAt: string 
  }
}