class StringUtility {
    static reverseString(input: string): string {
      return input.split('').reverse().join('');
    }
  
    static capitalizeString(input: string): string {
      return input.toUpperCase();
    }
  
    static lowercaseString(input: string): string {
      return input.toLowerCase();
    }
  }
  
  export default StringUtility;
  