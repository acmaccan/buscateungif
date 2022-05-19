import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test useFetchGifs', () => { 
  test('should return initial state', async() => { 
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Mononoke'));
    const {data, loading} = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })

  test('should return an images array and loading in false', async() => { 
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Mononoke'));
    await waitForNextUpdate();
    const {data, loading} = result.current;

    expect(data.length).toBe(20);
    expect(loading).toBe(false);
  })
})