const beforeLoad = "beforeload";
const loading = "loading";
const loaded = "loaded";

const isLoading = (state: string) => state === loading;

console.log(isLoading("dog"));


//----------------------------------------------------//

// enum 안에서 string값으로 줄필요 없음
enum LoadingState{
    beforeLoad,
    loading,
    loaded,
}

const isLoadingEnum = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoadingEnum(LoadingState.loading));