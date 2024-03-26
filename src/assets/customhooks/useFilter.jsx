import { useCallback } from "react"

const useFilter = ({ AllData, inpValue, filterFrom }) => {

    const newFilterData = useCallback(() => AllData.filter((item, i) => {
        return filterFrom.some(f => {
            return item[f].toString().includes(inpValue)
        })
    }))

    return newFilterData
}

export default useFilter