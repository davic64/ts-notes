// Dependency Injection

interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

// Here it is as if we were assigning the type to an object but in this case it is implementing it to a class
class ApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();

    return data;
  }
}

// Class to be used in the injection
class apiAdapter {
  // "T" is the default generic letter according to the standard but you can use any letter really
  async get<T>(url: string) {
    const sales = await fetch(url);
    return sales;
  }
  // USING SOMETHING LIKE AXIOS
  // async get<T>(url: string): Promise<T> {
  //   const {data} + await this.axios.get<T>(url);
  //   return data
  // }

  async post(url: string, data: any) {}

  async patch(url: string, data: any) {}
  async delete(url: string) {}
}

class Computer {
  get imageURL(): string {
    return `https://example.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public model: string,
    private readonly http: HttpAdapter
  ) {}

  public scream() {
    console.log(`${this.model.toUpperCase()}!!!`);
    this.computerId();
  }

  private computerId() {
    console.log(this.id);
  }

  async sales() {
    const sales = await this.http.get("https://example.com/api");
    console.log(sales);
  }
}

// const api = new apiAdapter();
const apiFetch = new ApiFetchAdapter();

// const macbook = new Computer(1, "Macbook Air", api);
const macbookTwo = new Computer(1, "Macbook Pro", apiFetch);
