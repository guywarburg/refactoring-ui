const THROTTLE = 500;

function getDataByUrl(url: string) {
  switch (url) {
    case '/pageHeader':
      return {
        icon: 'properties',
        title: 'GALDZO2R4I5ZK',
        status: 'active',
        address: '123 Main St., Galveston, TX 77555'
      };
    default:
      return {};
  }
}

export function mockFetch<T>(url: string): Promise<T> {
  return new Promise(resolve => {
    setTimeout(resolve, THROTTLE, getDataByUrl(url));
  });
}

export interface IFetch {
  <T>(url: string): Promise<T>;
}
