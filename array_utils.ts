export default class ArrayUtility
{
    findHighestNumber( theArray: any )
    {
        let result = null;

        if( theArray.length > 0 )
        {
            result = -Number.MAX_SAFE_INTEGER;

            for( let idx = 0; idx < theArray.length; idx++ )
            {
                if( theArray[idx] > result )
                    result = theArray[idx];
            }
        }

        return result;
    }
}