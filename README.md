# EBD Retiree Health Benefits Estimator

An unofficial web-based calculator for estimating retiree health premium subsidies for state employees. This tool helps retirees understand their eligibility for health insurance subsidies and calculate their estimated monthly premium costs.

## Features

- **Eligibility Calculator**: Determines subsidy eligibility based on service history and retirement conditions
- **Premium Estimator**: Calculates monthly costs for health, prescription, and dental plans
- **Multiple Plan Support**: Includes various health plans (CareFirst PPO/EPO, UHC PPO/EPO, Kaiser)
- **Medicare Integration**: Handles different Medicare enrollment scenarios
- **Service History Tracking**: Supports both MSRPS (Pension System) and ORP (Optional Retirement Program) service
- **Responsive Design**: Clean, mobile-friendly interface

## How It Works

### Step 1: Employee Information
- Select hire date group (before/after July 1, 2011)
- Indicate disability retirement status
- Specify Medicare enrollment for employee and dependents

### Step 2: Service History
- Add employment periods for pension system service
- Add Optional Retirement Program (ORP) service periods
- Calculate total creditable service automatically

### Step 3: Premium Calculation
- Choose from available health, prescription, and dental plans
- View detailed breakdown of premiums, subsidies, and final costs
- Print results for record keeping

## Eligibility Rules

### Pre-2011 Hires
- **Full Subsidy**: 16+ years of service
- **Prorated Subsidy**: 5-15 years of service
- **Disability**: Eligible regardless of service years

### Post-2011 Hires
- **Full Subsidy**: 25+ years of service
- **Prorated Subsidy**: 10-24 years of service
- **Disability**: Eligible regardless of service years

## Supported Plans

### Health Plans
- CareFirst PPO (CFPPO)
- CareFirst EPO (CFEPO)
- UHC PPO (UHCPPO)
- UHC EPO (UHCEPO)
- Kaiser IHM (KHP)

### Prescription Plans
- CVS/Caremark

### Dental Plans
- Delta Dental DHMO
- United Concordia DPPO

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Google Apps Script
- **Deployment**: Google Apps Script Web App

## Installation & Deployment

1. **Create a new Google Apps Script project**:
   - Go to [script.google.com](https://script.google.com)
   - Click "New Project"

2. **Add the files**:
   - Replace `Code.gs` content with the contents of `Code.js`
   - Create an HTML file named `index` and paste the contents of `index.html`

3. **Deploy as web app**:
   - Click "Deploy" > "New Deployment"
   - Choose "Web app" as the type
   - Set execute permissions as needed
   - Click "Deploy"

## Usage

1. Open the deployed web application
2. Fill in employee information (hire date group, retirement reason, Medicare status)
3. Add employment periods for all state service
4. Review eligibility results
5. Select desired health, prescription, and dental plans
6. Review premium breakdown and total monthly costs
7. Print results if needed

## Important Notes

- This is an **unofficial** tool for estimation purposes only
- Premium rates and eligibility rules may change
- Always verify calculations with official EBD resources
- Medicare enrollment status significantly affects available plan options and costs

## Contributing

This tool is designed to help state retirees estimate their benefits. If you notice any calculation errors or have suggestions for improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Disclaimer

This calculator is provided for informational purposes only and should not be considered official guidance. Always consult with the Employee Benefits Division or official documentation for authoritative information about your benefits.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

---

*For official information about retiree health benefits, please contact your Employee Benefits Division directly.*