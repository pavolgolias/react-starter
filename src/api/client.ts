type Init = Omit<RequestInit, 'body'> & {
  body?: unknown;
};

const apiClient = async <R>(url: string, { body, headers, ...initRest }: Init = {}) => {
  const init = {
    ...initRest,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : undefined),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  if (import.meta.env.DEV) {
    console.log('API client request:', { url, init });
  }

  const resp = await fetch(url, init);

  const json: unknown = await resp.json();

  if (!resp.ok) {
    throw json;
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return json as R;
};

export const get = <R>(url: string, init?: Init) =>
  apiClient<R>(url, {
    ...init,
    method: 'GET',
  });

export const post = <R>(url: string, init?: Init) =>
  apiClient<R>(url, {
    ...init,
    method: 'POST',
  });

export const put = <R>(url: string, init?: Init) =>
  apiClient<R>(url, {
    ...init,
    method: 'PUT',
  });

export const patch = <R>(url: string, init?: Init) =>
  apiClient<R>(url, {
    ...init,
    method: 'PATCH',
  });

export const del = <R>(url: string, init?: Init) =>
  apiClient<R>(url, {
    ...init,
    method: 'DELETE',
  });