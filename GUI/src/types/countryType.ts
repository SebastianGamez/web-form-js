type CountryType = {

  name: {
    common: string,
    official: string,
    nativeName: {
      spa: {
        official: string,
        common: string
      }
    }
  },
  flag: string,
  flags: {
    png: string,
    svg: string
  }

}

export default CountryType;