import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    // <div
    //   className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    //   style={{
    //     backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    //   }}
    // >
    //   <div className="w-full">
    //     <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
    //       <form
    //         onSubmit={(e) => {
    //           e.preventDefault();
    //           convert()

    //         }}
    //       >
    //         <div className="w-full mb-1">
    //           <InputBox
    //             label="From"
    //             amount={amount}
    //             currencyOptions={options}
    //             onCurrencyChange={(currency) => setAmount(amount)}
    //             selectCurrency={from}
    //             onAmountChange={(amount) => setAmount(amount)}
    //           />
    //         </div>
    //         <div className="relative w-full h-0.5">
    //           <button
    //             type="button"
    //             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
    //             onClick={swap}
    //           >
    //             Swap
    //           </button>
    //         </div>
    //         <div className="w-full mt-1 mb-4">
    //           <InputBox
    //             label="To"
    //             amount={convertedAmount}
    //             currencyOptions={options}
    //             onCurrencyChange={(currency) => setTo(currency)}
    //             selectCurrency={to}
    //             amountDisable
    //           />
    //         </div>
    //         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
    //           Convert {from.toUpperCase()} to {to.toUpperCase()}
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>


    <div style={{ width: '100%', height: '100vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
      backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
      backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,}}
    >
      <div style={{ width: '100%',display: 'block',justifyContent: 'center', alignItems: 'center' }}>
        {/* <h1>Currency Convertor With Vite + React</h1> */}
        <div style={{ maxWidth: '500px', margin: '0 auto', border: '1px solid rgba(0,0,0,0.2)', borderRadius: '0.5rem', 
          padding: '1.25rem', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div style={{ marginBottom: '0.25rem' }}>
              <InputBox label="From" amount={amount} currencyOptions={options} selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div style={{ position: 'relative', width: '100%', height: '0.5rem', marginBottom: '0.5rem' }}>
              <button type="button" onClick={swap}
                style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', border: '2px solid #fff', 
                borderRadius: '0.25rem', backgroundColor: '#3182ce', color: '#fff', padding: '0.5rem' }}
              >
                Swap
              </button>
            </div>
            <div style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>
              <InputBox label="To" amount={convertedAmount} currencyOptions={options} selectCurrency={to} amountDisable
                onCurrencyChange={(currency) => setTo(currency)}
              />
            </div>
            <button style={{ width: '100%', backgroundColor: '#3182ce', color: '#fff', padding: '1rem', borderRadius: '0.5rem', border: 'none' }} type="submit">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
