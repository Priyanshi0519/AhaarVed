import { AlertTriangle, TrendingUp, CheckCircle, Clock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WarningAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: 'danger',
      icon: AlertTriangle,
      title: 'High Sugar Alert',
      message: '5 high-sugar meals this week',
      recommendation: 'Try replacing sugary snacks with fruits',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'warning',
      icon: TrendingUp,
      title: 'Junk Food Streak',
      message: 'Junk food streak for 3 days',
      recommendation: 'Plan healthy meals for tomorrow',
      timestamp: '1 day ago'
    },
    {
      id: 3,
      type: 'success',
      icon: CheckCircle,
      title: 'Great Progress!',
      message: 'Protein target achieved 6/7 days',
      recommendation: 'Keep up the excellent work',
      timestamp: '3 hours ago'
    }
  ];

  const getAlertStyles = (type) => {
    switch (type) {
      case 'danger':
        return {
          border: 'border-l-4 border-l-danger bg-danger/5',
          icon: 'text-danger',
          badge: 'bg-danger text-white'
        };
      case 'warning':
        return {
          border: 'border-l-4 border-l-warning bg-warning/5',
          icon: 'text-warning',
          badge: 'bg-warning text-white'
        };
      case 'success':
        return {
          border: 'border-l-4 border-l-success bg-success/5',
          icon: 'text-success',
          badge: 'bg-success text-white'
        };
      default:
        return {
          border: 'border-l-4 border-l-muted bg-muted/5',
          icon: 'text-muted-foreground',
          badge: 'bg-muted text-muted-foreground'
        };
    }
  };

  const getTypeName = (type) => {
    switch (type) {
      case 'danger':
        return 'Critical';
      case 'warning':
        return 'Warning';
      case 'success':
        return 'Success';
      default:
        return 'Info';
    }
  };

  return (
    <Card className="bg-gradient-card border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          🎯 Insights & Alerts
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Personalized recommendations based on your nutrition data
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const styles = getAlertStyles(alert.type);
          const IconComponent = alert.icon;
          
          return (
            <Alert key={alert.id} className={`${styles.border} transition-all duration-300 hover:shadow-md`}>
              <div className="flex items-start gap-3">
                <IconComponent className={`h-5 w-5 mt-0.5 ${styles.icon}`} />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm">{alert.title}</h4>
                    <Badge className={`${styles.badge} text-xs`}>
                      {getTypeName(alert.type)}
                    </Badge>
                  </div>
                  <AlertDescription className="text-sm">
                    {alert.message}
                  </AlertDescription>
                  <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                    💡 <strong>Tip:</strong> {alert.recommendation}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {alert.timestamp}
                  </div>
                </div>
              </div>
            </Alert>
          );
        })}

        <div className="mt-6 p-4 bg-gradient-success/10 border border-success/20 rounded-lg">
          <h4 className="font-semibold text-sm mb-2 text-success">Weekly Summary</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-success font-medium">Achievements:</div>
              <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                <li>✅ 5 healthy days</li>
                <li>✅ Stayed hydrated</li>
                <li>✅ Hit protein goals</li>
              </ul>
            </div>
            <div>
              <div className="text-warning font-medium">Focus Areas:</div>
              <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                <li>⚠️ Reduce sugar intake</li>
                <li>⚠️ More vegetables</li>
                <li>⚠️ Consistent meal timing</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WarningAlerts;